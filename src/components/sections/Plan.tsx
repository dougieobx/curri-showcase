'use client'

import { useState } from 'react'

const pillars = [
  {
    name: 'Relationships',
    desc: 'Stakeholder + driver discovery',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-curri-blacktop" strokeWidth={1.5} fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    name: 'Measurement',
    desc: 'Definitions + scorecard',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-curri-blacktop" strokeWidth={1.5} fill="none">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    )
  },
  {
    name: 'Systems',
    desc: 'Weekly cadence + visibility',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-curri-blacktop" strokeWidth={1.5} fill="none">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    name: 'Experimentation',
    desc: 'Pilots + scaling',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-curri-blacktop" strokeWidth={1.5} fill="none">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  }
]

const phases = [
  {
    id: 'phase-1',
    days: 'Days 1-30',
    label: 'Learn',
    tagClass: 'bg-[#C491FB]/15 text-[#C491FB]',
    tagText: 'Learn & Integrate',
    title: 'Build the foundation',
    goals: [
      {
        title: 'Establish rapport',
        tasks: [
          'Complete stakeholder discovery calls',
          'Produce "Relationships & Insights" report',
          'Create a simple definition of "driver engagement"'
        ]
      },
      {
        title: 'Understand the landscape',
        tasks: [
          'Review all SOPs, project briefs and dashboards',
          'Meet with SMEs for platform demos',
          'Produce a "User Guide" for each platform'
        ]
      },
      {
        title: 'Establish baseline',
        tasks: [
          'Run initial driver interviews and roundtables',
          'Draft v1 baseline engagement scorecard',
          'Draft the Driver Pulse survey roadmap'
        ]
      }
    ],
    deliverables: [
      'Relationships & Insights report',
      'Platform User Guides',
      'Project status report',
      'Driver Engagement Baseline'
    ],
    kpis: [
      '100% completion of discovery calls',
      '100% review of SOPs and dashboards',
      '≥1 interview with driver from each segment'
    ]
  },
  {
    id: 'phase-2',
    days: 'Days 31-60',
    label: 'Contribute',
    tagClass: 'bg-curri-teal/15 text-curri-teal',
    tagText: 'Contribute & Apply',
    title: 'Give drivers a voice',
    goals: [
      {
        title: 'Launch Driver Pulse',
        tasks: [
          'Stand up lightweight survey system',
          'Launch in 3 strategic priority markets',
          'Track adoption, feedback and early results',
          'Day 60 decision: continue, iterate, or stop'
        ]
      },
      {
        title: 'Deepen driver understanding',
        tasks: [
          'Continue interviews and roundtables',
          'Cover gig, owner-operators, and fleets',
          'Identify what drivers value most',
          'Surface where trust breaks down'
        ]
      },
      {
        title: 'Strengthen the scorecard',
        tasks: [
          'Update to v2 with quantitative + qualitative signals',
          'Identify data gaps and plan to close them',
          'Provide leadership visibility on progress'
        ]
      }
    ],
    deliverables: [
      'Driver Pulse survey + dashboard',
      'Feedback system v1',
      'Scorecard v2'
    ],
    kpis: [
      '≥50 survey responses collected by day 60',
      'Weekly survey readout established',
      '1-star follow-up SLA: 100% within 48 hours'
    ]
  },
  {
    id: 'phase-3',
    days: 'Days 61-90',
    label: 'Lead',
    tagClass: 'bg-[#EF7849]/15 text-[#EF7849]',
    tagText: 'Lead & Optimize',
    title: 'Scale what works',
    goals: [
      {
        title: 'Scale Driver Pulse',
        tasks: [
          'Expand beyond initial markets',
          'Tighten categories, reduce noise',
          'Make follow-up cleaner and faster',
          'Continue tracking trends and actions'
        ]
      },
      {
        title: 'Launch a pilot',
        tasks: [
          'Select high-impact problem from Pulse + interviews',
          'Define clear hypothesis and success criteria',
          'Launch with guardrails',
          'Track and report results'
        ]
      },
      {
        title: 'Publish the next 90 days',
        tasks: [
          'Summarize learnings from pilots',
          'Draft next 2-3 initiatives',
          'Align roadmap with Director and stakeholders'
        ]
      }
    ],
    deliverables: [
      'Driver Pulse expansion plan',
      'Weekly Driver Voice readout',
      'Pilot brief + tracker',
      'Next 90 Days roadmap'
    ],
    kpis: [
      'Driver Pulse expanded to new markets',
      '1 pilot launched with clear metrics',
      'Next 90-day roadmap approved'
    ]
  }
]

export default function Plan() {
  const [activePhase, setActivePhase] = useState('phase-1')
  const currentPhase = phases.find(p => p.id === activePhase) || phases[0]

  return (
    <section id="plan" className="py-24 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-4">
            The Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-curri-blacktop mb-4">
            My 30-60-90 day plan
          </h2>
          <p className="text-lg text-curri-cement max-w-[700px] mx-auto">
            Building the systems, programs, and feedback loops that define world-class driver engagement.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pillars.map((pillar, i) => (
            <div 
              key={i}
              className="bg-curri-drywall border border-black/[0.06] rounded-xl p-5 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 bg-white border border-black/[0.06] rounded-lg flex items-center justify-center">
                {pillar.icon}
              </div>
              <div className="text-[0.9375rem] font-semibold text-curri-blacktop mb-1">
                {pillar.name}
              </div>
              <div className="text-xs text-curri-cement">
                {pillar.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`px-6 py-3 text-[0.9375rem] font-semibold rounded-full border transition-all duration-200 ${
                activePhase === phase.id
                  ? 'bg-curri-blacktop border-curri-blacktop text-white'
                  : 'bg-transparent border-black/10 text-curri-cement hover:border-curri-blacktop hover:text-curri-blacktop'
              }`}
            >
              <span className="text-curri-teal mr-1">{phase.days}</span>
              {phase.label}
            </button>
          ))}
        </div>

        {/* Phase Content */}
        <div className="animate-fadeIn">
          {/* Phase Header */}
          <div className="text-center mb-10">
            <span className={`inline-block text-[0.6875rem] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full mb-3 ${currentPhase.tagClass}`}>
              {currentPhase.tagText}
            </span>
            <h3 className="text-2xl font-bold text-curri-blacktop">
              {currentPhase.title}
            </h3>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {currentPhase.goals.map((goal, i) => (
              <div 
                key={i}
                className="bg-curri-drywall border border-black/[0.06] rounded-xl p-6 transition-all duration-200 hover:border-curri-teal/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <h4 className="text-base font-semibold text-curri-blacktop mb-3">
                  {goal.title}
                </h4>
                <ul className="space-y-2">
                  {goal.tasks.map((task, j) => (
                    <li key={j} className="relative pl-5 text-sm text-curri-cement leading-relaxed">
                      <span className="absolute left-0 top-[0.5rem] w-1.5 h-1.5 bg-curri-teal rounded-full" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Outcomes Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Deliverables */}
            <div className="bg-curri-drywall border border-black/[0.06] rounded-xl p-6">
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-curri-blacktop mb-4">
                Deliverables
              </div>
              <div className="flex flex-wrap gap-2">
                {currentPhase.deliverables.map((item, i) => (
                  <span 
                    key={i}
                    className="text-[0.8125rem] font-medium px-3.5 py-2 bg-white border border-black/[0.08] rounded-lg text-curri-blacktop"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="bg-curri-drywall border border-black/[0.06] rounded-xl p-6">
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-curri-blacktop mb-4">
                Key Performance Indicators
              </div>
              <ul className="space-y-2.5">
                {currentPhase.kpis.map((kpi, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-curri-blacktop">
                    <span className="w-[18px] h-[18px] flex-shrink-0 bg-curri-teal/15 rounded-full flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 stroke-curri-teal" strokeWidth={2.5} fill="none">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}

