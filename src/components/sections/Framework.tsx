'use client';

const indicators = [
  {
    name: 'Activation Rate',
    description: '% of drivers completing at least 1 delivery',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Activation Speed',
    description: 'Time from signup to first delivery',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Active Driver Rate',
    description: '% taking 1+ delivers per month',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Driver Throughput',
    description: 'Deliveries per active driver per month',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" stroke="currentColor" />
        <path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4" stroke="currentColor" />
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" />
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Driver Retention',
    description: 'Still active at 3, 6, 12 months',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <polyline points="23 4 23 10 17 10" stroke="currentColor" />
        <polyline points="1 20 1 14 7 14" stroke="currentColor" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Activity Trend',
    description: 'Deliveries trending up or down',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" />
        <polyline points="16 7 22 7 22 13" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Driver Satisfaction',
    description: 'CSAT and NPS pulse scores',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" />
        <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth={2} />
        <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
  },
  {
    name: 'Support Friction',
    description: 'Tickets per 100 deliveries',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" />
      </svg>
    ),
  },
];

const outcomes = [
  {
    name: 'Offer Acceptance Rate',
    description: 'Drivers say yes to jobs quickly',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <polyline points="20 6 9 17 4 12" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Time to Accept',
    description: 'Minutes from offer to acceptance drops',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <polyline points="12 6 12 12 16 14" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Coverage Rate',
    description: 'Loads covered without pay escalation',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" />
      </svg>
    ),
  },
];

function IndicatorCard({ name, description, icon }: { name: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-[52px] h-[52px] shrink-0 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-curri-teal/[0.08] group-hover:border-curri-teal/30">
        <div className="text-white/60 transition-colors duration-300 group-hover:text-curri-teal">
          {icon}
        </div>
      </div>
      <div className="pt-1">
        <h3 className="text-base font-semibold text-white mb-1">{name}</h3>
        <p className="text-sm text-white/45 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Framework() {
  return (
    <section id="framework" className="bg-curri-blacktop py-24 px-8">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-4">
            The Framework
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Measuring what matters
          </h2>
        </div>
        
        {/* Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10 mb-20">
          {indicators.map((indicator) => (
            <IndicatorCard key={indicator.name} {...indicator} />
          ))}
        </div>
        
        {/* Outcomes Section */}
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-10">
            <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-3">
              The Outcomes
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              What success looks like
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
            {outcomes.map((outcome) => (
              <IndicatorCard key={outcome.name} {...outcome} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

