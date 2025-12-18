'use client'

import { useState } from 'react'
import PhoneMockup from '@/components/ui/PhoneMockup'
import PulseSurvey from '@/components/ui/PulseSurvey'
import PulseDashboard from '@/components/ui/PulseDashboard'
import { PulseSubmission } from '@/lib/supabase'

export default function DriverPulse() {
  const [submissions, setSubmissions] = useState<PulseSubmission[]>([])

  const handleNewSubmission = (submission: PulseSubmission) => {
    setSubmissions(prev => [...prev, submission])
  }

  return (
    <section id="driver-pulse" className="relative py-24 bg-gradient-to-br from-gray-900 via-curri-blacktop to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-curri-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-curri-teal/5 rounded-full blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-4">
            The Costless Idea
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Driver Pulse
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
            A lightweight feedback loop that gives operations visibility into driver sentiment — 
            without adding cost or complexity.
          </p>
          <p className="text-gray-400 text-sm mb-2">
            Try it out! Submit a rating on the left and watch it appear in the dashboard.
          </p>
          <p className="text-xs text-gray-500">
            Pro tip: Give a 1-star rating with a long comment to trigger an escalation alert. 🚨
          </p>
        </div>

        {/* Split View */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
          {/* Left: Phone Mockup */}
          <div className="flex-shrink-0">
            <div className="mb-4">
              <p className="text-sm font-semibold text-curri-teal text-center uppercase tracking-wide">
                Driver View
              </p>
            </div>
            <PhoneMockup>
              <PulseSurvey onSubmit={handleNewSubmission} />
            </PhoneMockup>
          </div>

          {/* Right: Dashboard */}
          <div className="w-full lg:w-[750px] lg:min-h-[650px]">
            <div className="mb-4">
              <p className="text-sm font-semibold text-curri-teal text-center uppercase tracking-wide">
                Ops Dashboard
              </p>
            </div>
            <PulseDashboard submissions={submissions} />
          </div>
        </div>

      </div>
    </section>
  )
}

