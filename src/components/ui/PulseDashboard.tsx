'use client'

import { useState, useMemo } from 'react'
import { PulseSubmission, MARKETS, VEHICLE_TYPES, DRIVER_TYPES } from '@/lib/supabase'

interface PulseDashboardProps {
  submissions: PulseSubmission[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  return `${Math.floor(seconds / 86400)}d ago`
}

export default function PulseDashboard({ submissions }: PulseDashboardProps) {
  const [marketFilter, setMarketFilter] = useState<string>('all')
  const [driverTypeFilter, setDriverTypeFilter] = useState<string>('all')
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState<string>('all')

  // Filter submissions based on selected filters
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(s => {
      if (marketFilter !== 'all' && s.market_name !== marketFilter) return false
      if (driverTypeFilter !== 'all' && s.driver_type !== driverTypeFilter) return false
      if (vehicleTypeFilter !== 'all' && s.vehicle_type !== vehicleTypeFilter) return false
      return true
    })
  }, [submissions, marketFilter, driverTypeFilter, vehicleTypeFilter])

  const avgRating = filteredSubmissions.length > 0
    ? (filteredSubmissions.reduce((sum, s) => sum + s.star_rating, 0) / filteredSubmissions.length).toFixed(1)
    : '—'
  
  const escalationCount = filteredSubmissions.filter(s => s.is_escalated).length

  // Calculate market breakdown with stats
  const marketStats = useMemo(() => {
    const stats: Record<string, { responses: number; totalRating: number; escalations: number }> = {}
    
    // Initialize all markets
    MARKETS.forEach(market => {
      stats[market] = { responses: 0, totalRating: 0, escalations: 0 }
    })
    
    // Populate with filtered data
    filteredSubmissions.forEach(s => {
      if (!stats[s.market_name]) {
        stats[s.market_name] = { responses: 0, totalRating: 0, escalations: 0 }
      }
      stats[s.market_name].responses++
      stats[s.market_name].totalRating += s.star_rating
      if (s.is_escalated) stats[s.market_name].escalations++
    })
    
    return stats
  }, [filteredSubmissions])

  const hasAnyData = submissions.length > 0

  return (
    <div className="bg-curri-blacktop rounded-2xl p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Pulse Dashboard</h3>
          <p className="text-sm text-gray-400">Real-time driver feedback</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-curri-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-curri-teal"></span>
          </span>
          <span className="text-xs text-curri-teal font-medium">Live</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={marketFilter}
          onChange={(e) => setMarketFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-curri-teal/50"
        >
          <option value="all" className="bg-curri-blacktop">All Markets</option>
          {MARKETS.map(market => (
            <option key={market} value={market} className="bg-curri-blacktop">{market}</option>
          ))}
        </select>
        
        <select
          value={driverTypeFilter}
          onChange={(e) => setDriverTypeFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-curri-teal/50"
        >
          <option value="all" className="bg-curri-blacktop">All Driver Types</option>
          {DRIVER_TYPES.map(type => (
            <option key={type} value={type} className="bg-curri-blacktop">{type}</option>
          ))}
        </select>
        
        <select
          value={vehicleTypeFilter}
          onChange={(e) => setVehicleTypeFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-curri-teal/50"
        >
          <option value="all" className="bg-curri-blacktop">All Vehicles</option>
          {VEHICLE_TYPES.map(type => (
            <option key={type} value={type} className="bg-curri-blacktop">{type}</option>
          ))}
        </select>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Responses</p>
          <p className="text-2xl font-bold text-white">{filteredSubmissions.length}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Avg Rating</p>
          <p className="text-2xl font-bold text-white">{avgRating}</p>
        </div>
        <div className={`rounded-xl p-4 ${escalationCount > 0 ? 'bg-red-500/20' : 'bg-white/5'}`}>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Escalations</p>
          <p className={`text-2xl font-bold ${escalationCount > 0 ? 'text-red-400' : 'text-white'}`}>
            {escalationCount}
          </p>
        </div>
      </div>

      {/* Market Breakdown Table */}
      <div className="bg-white/5 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-xs text-gray-400 uppercase tracking-wide p-3">Market</th>
              <th className="text-center text-xs text-gray-400 uppercase tracking-wide p-3">Responses</th>
              <th className="text-center text-xs text-gray-400 uppercase tracking-wide p-3">Avg Rating</th>
              <th className="text-center text-xs text-gray-400 uppercase tracking-wide p-3">Escalations</th>
            </tr>
          </thead>
          <tbody>
            {MARKETS.map((market) => {
              const stats = marketStats[market]
              const avgMarketRating = stats.responses > 0 
                ? (stats.totalRating / stats.responses).toFixed(1) 
                : '—'
              return (
                <tr key={market} className="border-b border-white/5 last:border-b-0">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-curri-teal"></span>
                      <span className="text-sm text-white">{market}</span>
                    </div>
                  </td>
                  <td className="text-center p-3">
                    <span className="text-sm text-white font-medium">{stats.responses}</span>
                  </td>
                  <td className="text-center p-3">
                    <span className="text-sm text-white font-medium">{avgMarketRating}</span>
                  </td>
                  <td className="text-center p-3">
                    <span className={`text-sm font-medium ${stats.escalations > 0 ? 'text-red-400' : 'text-white'}`}>
                      {stats.escalations}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Feed - Horizontal Carousel */}
      <div className="flex-1">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Live Feed</p>
        {!hasAnyData ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-sm text-gray-400">No submissions yet</p>
            <p className="text-xs text-gray-500 mt-1">Submit feedback on the left to see it appear here</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-sm text-gray-400">No results match your filters</p>
            <button 
              onClick={() => {
                setMarketFilter('all')
                setDriverTypeFilter('all')
                setVehicleTypeFilter('all')
              }}
              className="text-xs text-curri-teal mt-2 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto pb-2 -mx-2 px-2">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              {filteredSubmissions.slice().reverse().map((submission) => (
                <div 
                  key={submission.id} 
                  className={`flex-shrink-0 w-[280px] rounded-xl p-4 border transition-all ${
                    submission.is_escalated 
                      ? 'bg-red-500/10 border-red-500/30' 
                      : 'bg-white/5 border-white/5'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-curri-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-curri-teal">
                          {submission.driver_id.split('-')[1]?.slice(0, 2) || 'DR'}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">{submission.driver_id}</p>
                        <p className="text-xs text-gray-400 truncate">
                          {submission.market_name} · {submission.driver_type}
                        </p>
                      </div>
                    </div>
                    {submission.is_escalated && (
                      <span className="flex items-center gap-1 text-xs font-medium text-red-400 bg-red-500/20 px-2 py-1 rounded-full flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
                        </svg>
                        Escalate
                      </span>
                    )}
                  </div>

                  {/* Vehicle & Time */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{submission.vehicle_type}</span>
                    <span className="text-xs text-gray-500">
                      {submission.created_at ? formatTimeAgo(submission.created_at) : 'now'}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="mb-2">
                    <StarRating rating={submission.star_rating} />
                  </div>

                  {/* Tags */}
                  {submission.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {submission.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-0.5 bg-white/10 text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Comment */}
                  {submission.comment && (
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                      &quot;{submission.comment}&quot;
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
