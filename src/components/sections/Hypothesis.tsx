'use client';

export function Hypothesis() {
  return (
    <section id="hypothesis" className="bg-curri-drywall py-24 px-8">
      <div className="container-max">
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-3">
            Market C Deep Dive
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-curri-blacktop">
            Why is engagement suffering?
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Hypothesis + Flywheel - Dark Mode */}
          <div className="bg-curri-blacktop border border-white/[0.08] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="inline-block text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-curri-teal bg-curri-teal/10 px-3 py-1.5 rounded-full mb-5">
              Primary Hypothesis
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              Predictable work beats better pay
            </h3>
            <p className="text-base text-white/60 leading-relaxed">
              When work feels bursty and offers aren&apos;t a strong match, drivers default back to multi-apping. They stop prioritizing Curri.
            </p>

            {/* Flywheel Section */}
            <div className="mt-10 pt-8 border-t border-white/[0.08]">
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-white mb-6">
                The Negative Flywheel
              </div>
              
              <div className="relative w-[260px] h-[260px] mx-auto">
                {/* Dashed circle */}
                <div className="absolute inset-[30px] border-2 border-dashed border-white/[0.15] rounded-full" />
                
                {/* Rotating arrows - Teal */}
                <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                  {[0, 90, 180, 270].map((rotation, i) => (
                    <svg 
                      key={i}
                      className="absolute w-5 h-5 text-curri-teal/70"
                      style={{
                        top: i === 0 ? '25px' : i === 2 ? 'auto' : '50%',
                        bottom: i === 2 ? '25px' : 'auto',
                        left: i === 0 || i === 2 ? '50%' : i === 3 ? '25px' : 'auto',
                        right: i === 1 ? '25px' : 'auto',
                        transform: `${i === 0 || i === 2 ? 'translateX(-50%)' : 'translateY(-50%)'} rotate(${rotation + 90}deg)`,
                      }}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  ))}
                </div>

                {/* Nodes - Dark style */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white/[0.05] border border-white/10 rounded-lg px-2.5 py-2 text-[0.6875rem] font-medium text-white/80 whitespace-nowrap shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:border-curri-teal/50 transition-colors">
                  Fewer drivers online
                </div>
                <div className="absolute top-1/2 -right-[55px] -translate-y-1/2 bg-white/[0.05] border border-white/10 rounded-lg px-2.5 py-2 text-[0.6875rem] font-medium text-white/80 whitespace-nowrap shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:border-curri-teal/50 transition-colors">
                  Slower coverage
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/[0.05] border border-white/10 rounded-lg px-2.5 py-2 text-[0.6875rem] font-medium text-white/80 whitespace-nowrap shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:border-curri-teal/50 transition-colors">
                  More volatility
                </div>
                <div className="absolute top-1/2 -left-[55px] -translate-y-1/2 bg-white/[0.05] border border-white/10 rounded-lg px-2.5 py-2 text-[0.6875rem] font-medium text-white/80 whitespace-nowrap shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:border-curri-teal/50 transition-colors">
                  Worse experience
                </div>

                {/* Center - Teal with trend icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-curri-teal/10 border-2 border-curri-teal rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-curri-teal" strokeWidth={2} fill="none">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                    <polyline points="17 18 23 18 23 12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Data to Validate - Dark Mode */}
          <div className="bg-curri-blacktop border border-white/[0.08] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-white mb-6">
              Data to Validate
            </div>
            
            <div className="flex flex-col gap-3">
              <ValidationItem 
                icon={<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>}
                question="Are drivers seeing inconsistent offer flow?"
                metric="Offers per driver per day/week, time gaps between offers"
              />
              <ValidationItem 
                icon={<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>}
                question="Are drivers leaving for other platforms?"
                metric="Multi-app usage patterns, where churned drivers go"
              />
              <ValidationItem 
                icon={<><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
                question="Is the inconsistency predictable or random?"
                metric="Day-of-week / time-of-day offer patterns"
              />
              <ValidationItem 
                icon={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                question="Are there coverage gaps we're not filling?"
                metric="Unfilled demand windows, time-to-cover by time slot"
              />
              <ValidationItem 
                icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}
                question="What do drivers say is the problem?"
                metric="Survey/feedback on why they stopped driving"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValidationItem({ icon, question, metric }: { icon: React.ReactNode; question: string; metric: string }) {
  return (
    <div className="flex gap-4 items-start p-4 bg-white/[0.03] rounded-xl transition-colors hover:bg-curri-teal/[0.08] group">
      <div className="w-[52px] h-[52px] shrink-0 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center transition-all group-hover:bg-curri-teal/[0.08] group-hover:border-curri-teal/30">
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white/60 group-hover:stroke-curri-teal transition-colors" strokeWidth={1.5} fill="none">
          {icon}
        </svg>
      </div>
      <div className="pt-1">
        <div className="text-base font-semibold text-white mb-1">
          {question}
        </div>
        <div className="text-sm text-white/45 leading-relaxed">
          {metric}
        </div>
      </div>
    </div>
  );
}
