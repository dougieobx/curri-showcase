'use client'

import { useState } from 'react'
import { supabase, generateFakeDriverData, shouldEscalate, PulseSubmission } from '@/lib/supabase'

interface PulseSurveyProps {
  onSubmit: (submission: PulseSubmission) => void
}

const TAGS = [
  'job details',
  'pickup wait',
  'dropoff issues',
  'support',
  'payout',
  'app issues'
]

export default function PulseSurvey({ onSubmit }: PulseSurveyProps) {
  const [rating, setRating] = useState<number>(0)
  const [hoveredStar, setHoveredStar] = useState<number>(0)
  const [comment, setComment] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const handleSubmit = async () => {
    if (rating === 0) return
    
    setIsSubmitting(true)
    
    const fakeData = generateFakeDriverData()
    const is_escalated = shouldEscalate(rating, comment || null)
    
    const submission: PulseSubmission = {
      star_rating: rating,
      comment: comment || null,
      tags: selectedTags,
      ...fakeData,
      is_escalated,
    }

    try {
      // Check if Supabase is configured
      if (supabase) {
        const { data, error } = await supabase
          .from('pulse_submissions')
          .insert([submission])
          .select()
          .single()

        if (error) {
          console.log('Supabase error, using local submission:', error.message)
          onSubmit({ ...submission, id: crypto.randomUUID(), created_at: new Date().toISOString() })
        } else {
          onSubmit(data)
        }
      } else {
        // Demo mode - no Supabase connection
        console.log('Demo mode - storing locally')
        onSubmit({ ...submission, id: crypto.randomUUID(), created_at: new Date().toISOString() })
      }
    } catch (err) {
      // Fallback for demo purposes
      console.log('Demo mode - no Supabase connection')
      onSubmit({ ...submission, id: crypto.randomUUID(), created_at: new Date().toISOString() })
    }

    // Show success state
    setShowSuccess(true)
    
    // Reset form after delay
    setTimeout(() => {
      setRating(0)
      setComment('')
      setSelectedTags([])
      setShowSuccess(false)
      setIsSubmitting(false)
    }, 2000)
  }

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="w-20 h-20 bg-curri-teal/10 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-curri-blacktop mb-2">Thank you!</h3>
        <p className="text-curri-cement text-sm">Your feedback helps us improve.</p>
      </div>
    )
  }

  return (
    <div className="p-5 space-y-5">
      {/* Header */}
      <div className="text-center pb-3 border-b border-gray-100">
        <div className="w-12 h-12 bg-curri-teal/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
          <svg className="w-6 h-6 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-curri-blacktop">Driver Pulse</h2>
        <p className="text-xs text-curri-cement mt-1">How was your last delivery?</p>
      </div>

      {/* Star Rating */}
      <div className="text-center">
        <label className="block text-xs font-semibold text-curri-blacktop mb-2 uppercase tracking-wide">
          Rate your experience
        </label>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <svg 
                className={`w-10 h-10 transition-colors ${
                  star <= (hoveredStar || rating) 
                    ? 'text-amber-400 fill-amber-400' 
                    : 'text-gray-200 fill-gray-200'
                }`} 
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
        {rating > 0 && (
          <p className="text-xs text-curri-cement mt-2">
            {rating === 1 && "We're sorry to hear that"}
            {rating === 2 && "We'll work on it"}
            {rating === 3 && "Thanks for the feedback"}
            {rating === 4 && "Glad it went well!"}
            {rating === 5 && "Awesome! 🎉"}
          </p>
        )}
      </div>

      {/* Tags */}
      <div className="text-center">
        <label className="block text-xs font-semibold text-curri-blacktop mb-2 uppercase tracking-wide">
          Quick tags <span className="font-normal text-curri-cement">(optional)</span>
        </label>
        <div className="flex flex-wrap justify-center gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                selectedTags.includes(tag)
                  ? 'bg-curri-teal text-white border-curri-teal'
                  : 'bg-white text-curri-cement border-gray-200 hover:border-curri-teal/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="text-center">
        <label className="block text-xs font-semibold text-curri-blacktop mb-2 uppercase tracking-wide">
          Comments <span className="font-normal text-curri-cement">(optional)</span>
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onFocus={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          placeholder="Tell us more about your experience..."
          rows={3}
          className="w-full px-3 py-2 text-sm text-curri-blacktop bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-curri-teal/30 focus:border-curri-teal resize-none"
          style={{ WebkitUserSelect: 'text', userSelect: 'text' }}
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={rating === 0 || isSubmitting}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
          rating === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-curri-teal text-white hover:bg-curri-teal/90 active:scale-[0.98]'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </div>
  )
}

