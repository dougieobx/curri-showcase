'use client'

import { ReactNode } from 'react'

interface PhoneMockupProps {
  children: ReactNode
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto">
      {/* Phone Frame */}
      <div className="relative w-[320px] h-[650px] bg-curri-blacktop rounded-[3rem] p-3 shadow-2xl">
        {/* Notch - pointer-events-none so it doesn't block interactions */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-curri-blacktop rounded-b-2xl z-20 pointer-events-none" />
        
        {/* Speaker */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full z-30 pointer-events-none" />
        
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 py-2 bg-curri-teal text-white text-xs font-medium pointer-events-none">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C8.5 3 5.5 4.6 3.5 7L12 21l8.5-14C18.5 4.6 15.5 3 12 3z"/>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 22h20V2L2 22z"/>
              </svg>
              <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-end pr-0.5">
                <div className="w-4 h-2 bg-white rounded-sm"/>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="h-[calc(100%-2rem)] overflow-y-auto">
            {children}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

