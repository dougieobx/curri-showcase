'use client'

import { useState } from 'react'

const phases = [
  {
    id: 'pilot',
    number: '01',
    title: 'Run the Pilot',
    subtitle: 'Market C, 4-6 weeks',
    description: 'Start where engagement is weakest. Keep it lightweight so completion rates stay high.',
    details: [
      'Every completed delivery triggers a quick "How was that job?" 1–5 rating',
      'Optional text box for detailed feedback',
      'Short list of tags (job details, pickup wait, dropoff issues, support, payout, app issues) to quantify themes without forcing long comments',
      'Compare against a "control" market where we don\'t operationalize the loop yet'
    ],
    rhythm: {
      title: 'Weekly Ops Rhythm',
      steps: [
        'Roll up pulse data by market, driver type, and vehicle type',
        'Share short readout with local ops: top 1-2 issues + 1-2 actions to try',
        'Follow up one week later to see if issues and ratings are moving',
        'For 1-star + detailed feedback: direct driver outreach to close the loop'
      ]
    }
  },
  {
    id: 'validate',
    number: '02',
    title: 'Build Confidence',
    subtitle: 'Track three layers of success',
    description: 'Know whether the measurement system works, if sentiment is improving, and if it translates to real behavior change.',
    metrics: [
      {
        layer: 'Adoption',
        question: 'Is the measurement system viable?',
        color: 'from-blue-500 to-cyan-500',
        items: [
          'Driver pulse completion rate (overall + by segment)',
          '% of feedback that is "actionable" (tagged issues or meaningful comments)'
        ]
      },
      {
        layer: 'Sentiment',
        question: 'Is the experience improving?',
        color: 'from-curri-teal to-emerald-500',
        items: [
          'Average pulse score by market/segment',
          '% of 1–2 star ratings over time',
          'Top issue categories trend week over week'
        ]
      },
      {
        layer: 'Behavior',
        question: 'Does it translate to engagement?',
        color: 'from-amber-500 to-orange-500',
        items: [
          'Deliveries per driver trend and volatility',
          'Concentration risk reduction',
          'Escalation frequency and time-to-accept'
        ]
      }
    ]
  },
  {
    id: 'scale',
    number: '03',
    title: 'Scale It',
    subtitle: 'If it works, expand systematically',
    description: 'If drivers use it, we can turn it into actions, and we see improvement — scale in three steps.',
    steps: [
      {
        title: 'Standardize the Playbook',
        description: 'Weekly market readout template, top issue categories, and a "recommended actions" menu so local ops leaders don\'t reinvent the wheel.'
      },
      {
        title: 'Roll Out by Priority',
        description: 'Expand to the next 2–3 weakest markets first, then to the broader network.'
      },
      {
        title: 'Bake Into Operating Cadence',
        description: 'Driver pulse score becomes a permanent input to the market scorecard — the standard way Curri stack-ranks market health.'
      }
    ]
  }
]

export default function Implementation() {
  const [activePhase, setActivePhase] = useState('pilot')
  const currentPhase = phases.find(p => p.id === activePhase) || phases[0]

  return (
    <section id="implementation" className="relative py-24 bg-curri-blacktop overflow-hidden">
      {/* Gradient accent - matches Hero */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-curri-teal/[0.08] to-transparent pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-4">
            Making It Real
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            From idea to operating system
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A good idea without a plan is just a wish. Here&apos;s how I&apos;d test, validate, and scale 
            Driver Pulse into a permanent part of how Curri manages market health.
          </p>
        </div>

        {/* Phase Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-2xl p-1.5 border border-white/10">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activePhase === phase.id
                    ? 'bg-curri-teal text-white shadow-lg shadow-curri-teal/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-xs opacity-60 mr-2">{phase.number}</span>
                {phase.title}
              </button>
            ))}
          </div>
        </div>

        {/* Phase Content */}
        <div className="min-h-[500px]">
          {/* Pilot Phase */}
          {activePhase === 'pilot' && (
            <div className="animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Main Content */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-curri-teal/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentPhase.title}</h3>
                      <p className="text-curri-teal font-medium">{currentPhase.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {currentPhase.description}
                  </p>

                  <ul className="space-y-3">
                    {currentPhase.details?.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-curri-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Weekly Rhythm */}
                <div className="bg-gradient-to-br from-curri-teal/10 to-transparent border border-curri-teal/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-curri-teal/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">{currentPhase.rhythm?.title}</h4>
                  </div>

                  <div className="space-y-4">
                    {currentPhase.rhythm?.steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-curri-teal text-white flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </div>
                          {i < (currentPhase.rhythm?.steps.length || 0) - 1 && (
                            <div className="w-0.5 h-full bg-curri-teal/30 mt-2" />
                          )}
                        </div>
                        <p className="text-gray-300 pb-4">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Validate Phase */}
          {activePhase === 'validate' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">{phases[1].title}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">{phases[1].description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {phases[1].metrics?.map((metric, i) => (
                  <div 
                    key={i}
                    className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                  >
                    {/* Gradient accent */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${metric.color} text-white mb-4`}>
                        {metric.layer}
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-4">{metric.question}</h4>
                      
                      <ul className="space-y-3">
                        {metric.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="text-sm text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Control vs Pilot callout */}
              <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Keeping the test honest</h4>
                  <p className="text-gray-400 text-sm">
                    Compare the pilot market against a &quot;control&quot; market where we don&apos;t operationalize the loop yet. 
                    Set a clear time window (4–6 weeks) so we can decide if it&apos;s worth scaling.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Scale Phase */}
          {activePhase === 'scale' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">{phases[2].title}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">{phases[2].description}</p>
              </div>

              {/* Success criteria */}
              <div className="bg-curri-teal/10 border border-curri-teal/20 rounded-2xl p-6 mb-8">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Scale when these are true:
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-curri-teal/20 text-curri-teal rounded-full text-sm font-medium">
                    Drivers actually use it
                  </span>
                  <span className="px-4 py-2 bg-curri-teal/20 text-curri-teal rounded-full text-sm font-medium">
                    We can turn it into 1-2 operational actions weekly
                  </span>
                  <span className="px-4 py-2 bg-curri-teal/20 text-curri-teal rounded-full text-sm font-medium">
                    Sentiment improves + engagement stabilizes
                  </span>
                </div>
              </div>

              {/* Scaling steps */}
              <div className="grid md:grid-cols-3 gap-6">
                {phases[2].steps?.map((step, i) => (
                  <div 
                    key={i}
                    className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-curri-teal/30 transition-all duration-300"
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-curri-teal text-white flex items-center justify-center font-bold shadow-lg shadow-curri-teal/20">
                      {i + 1}
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3 mt-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Final outcome */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-curri-teal/20 to-emerald-500/20 border border-curri-teal/30 rounded-2xl">
                  <svg className="w-6 h-6 text-curri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-white font-medium">
                    The driver pulse score becomes a permanent input to the <span className="text-curri-teal">Market Scorecard</span> — 
                    the standard way Curri stack-ranks market health.
                  </p>
                </div>
              </div>
            </div>
          )}
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

