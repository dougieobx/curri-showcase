'use client';

import { useState, useEffect } from 'react';

interface MarketData {
  id: string;
  name: string;
  badge: string;
  badgeType: 'strong' | 'weak' | 'neutral';
  stats: { label: string; value: string; type?: 'positive' | 'negative' }[];
  detailTitle: string;
  detailContent: React.ReactNode;
}

const markets: MarketData[] = [
  {
    id: 'market-a',
    name: 'Market A',
    badge: 'Top Heavy',
    badgeType: 'neutral',
    stats: [
      { label: 'Volatility', value: 'Low (7%)', type: 'positive' },
      { label: 'Delivery Decline', value: 'Lowest', type: 'positive' },
      { label: 'Revenue Decline', value: 'Highest', type: 'negative' },
      { label: 'Concentration Risk', value: 'Highest', type: 'negative' },
    ],
    detailTitle: 'Market A: Strong engagement, risky concentration',
    detailContent: (
      <div className="space-y-4">
        <p>
          Market A looks strong from an engagement standpoint: deliveries per driver decline the least over time 
          and month-to-month activity is steady. The biggest risk is <strong>concentration</strong> — nearly half 
          of deliveries are being completed by the top 10 drivers — which means the market is stable, but also 
          more fragile if a few high performers churn or reduce availability. Revenue is also trending down, 
          which looks more like a job-mix issue (fewer higher-paying loads) than a pure volume collapse.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-curri-cement">
          <li><strong className="text-curri-blacktop">Strength:</strong> Lowest volatility + strongest delivery stability per driver</li>
          <li><strong className="text-curri-blacktop">Risk:</strong> Heavy dependence on top drivers (concentration)</li>
          <li><strong className="text-curri-blacktop">Watch-out:</strong> Revenue pressure likely tied to fewer high-value loads</li>
          <li><strong className="text-curri-blacktop">Opportunity:</strong> Diversify supply depth and protect high-value capacity</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'market-b',
    name: 'Market B',
    badge: 'Strongest',
    badgeType: 'strong',
    stats: [
      { label: 'Volatility', value: 'Low (8%)', type: 'positive' },
      { label: 'Revenue per Driver', value: 'Highest', type: 'positive' },
      { label: 'Concentration Risk', value: 'Lowest', type: 'positive' },
      { label: 'Segment Consistency', value: 'Excellent', type: 'positive' },
    ],
    detailTitle: 'Why Market B is the strongest',
    detailContent: (
      <div className="space-y-4">
        <p>
          Market B isn&apos;t the absolute best on every single metric, but it shows the most{' '}
          <strong>balanced and resilient performance</strong>. It produces the most revenue both in total 
          and per driver, has volatility that&apos;s nearly as low as Market A (8% vs. 7%), and sits in the 
          middle on delivery and revenue % change rather than swinging hard in either direction.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-curri-cement">
          <li>
            <strong className="text-curri-blacktop">Healthiest concentration profile:</strong> Volume is less 
            dependent on a small handful of high-performing drivers
          </li>
          <li>
            <strong className="text-curri-blacktop">Remarkably consistent segments:</strong> When you segment 
            by driver type and vehicle type, Market B shows consistent delivery trends across all segments
          </li>
          <li>
            <strong className="text-curri-blacktop">No single point of failure:</strong> No single driver group 
            or vehicle class is propping up the market or collapsing underneath it
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'market-c',
    name: 'Market C',
    badge: 'Struggling',
    badgeType: 'weak',
    stats: [
      { label: 'Volatility', value: 'Highest', type: 'negative' },
      { label: 'Delivery Decline', value: 'Highest', type: 'negative' },
      { label: 'Gig Segment', value: 'Decaying', type: 'negative' },
      { label: 'Avg $/Delivery', value: 'Up' },
    ],
    detailTitle: 'Why Market C needs attention',
    detailContent: (
      <div className="space-y-4">
        <p>
          Market C, despite having the only increase in average revenue per delivery, appears to be unhealthy 
          based on observable symptoms: it has the <strong>biggest delivery decline per driver</strong>,{' '}
          <strong>highest volatility</strong>, and the <strong>gig segment decays the hardest</strong>.
        </p>
        <p>
          This suggests a deeper engagement problem that higher payouts alone aren&apos;t solving—drivers may 
          be accepting fewer jobs overall, or the most engaged drivers are leaving the platform.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-curri-cement">
          <li>
            <strong className="text-curri-blacktop">Concerning trend:</strong> Higher pay per delivery but 
            fewer deliveries overall indicates cherry-picking behavior
          </li>
          <li>
            <strong className="text-curri-blacktop">Gig driver exodus:</strong> The most flexible driver 
            segment is leaving fastest, suggesting competitive pressure
          </li>
          <li>
            <strong className="text-curri-blacktop">Systemic issues:</strong> Problems likely extend beyond 
            pay rates to job quality, predictability, and trust
          </li>
        </ul>
      </div>
    ),
  },
];

function MarketCard({ market, onClick }: { market: MarketData; onClick: () => void }) {
  const borderColor = {
    strong: 'hover:border-curri-teal/40 hover:shadow-curri-teal/10',
    weak: 'hover:border-curri-brickwork/40 hover:shadow-curri-brickwork/10',
    neutral: 'hover:border-curri-cement/40 hover:shadow-curri-cement/10',
  }[market.badgeType];

  const topBorder = {
    strong: 'before:bg-curri-teal',
    weak: 'before:bg-curri-brickwork',
    neutral: 'before:bg-curri-cement',
  }[market.badgeType];

  const badgeStyle = {
    strong: 'bg-curri-teal/10 text-curri-teal',
    weak: 'bg-curri-brickwork/10 text-curri-brickwork',
    neutral: 'bg-curri-cement/10 text-curri-cement',
  }[market.badgeType];

  return (
    <button
      onClick={onClick}
      className={`relative w-full text-left bg-white rounded-2xl border border-black/[0.08] p-8 transition-all duration-300 cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 ${topBorder} ${borderColor} hover:shadow-xl hover:-translate-y-1 group`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-curri-blacktop tracking-tight">{market.name}</h3>
        <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide ${badgeStyle}`}>
          {market.badge}
        </span>
      </div>
      
      {/* Stats */}
      <div className="space-y-3">
        {market.stats.map((stat) => (
          <div key={stat.label} className="flex justify-between items-center py-2 border-b border-black/[0.05] last:border-0">
            <span className="text-sm text-curri-cement">{stat.label}</span>
            <span className={`text-base font-semibold ${
              stat.type === 'positive' ? 'text-curri-teal' : 
              stat.type === 'negative' ? 'text-curri-brickwork' : 
              'text-curri-blacktop'
            }`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Click hint */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-curri-cement/60 group-hover:text-curri-cement transition-colors">
        <span>Click for details</span>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" strokeWidth={2} stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

function MarketModal({ market, isOpen, onClose }: { market: MarketData | null; isOpen: boolean; onClose: () => void }) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!market) return null;

  const accentColor = {
    strong: 'border-l-curri-teal',
    weak: 'border-l-curri-brickwork',
    neutral: 'border-l-curri-cement',
  }[market.badgeType];

  const iconBg = {
    strong: 'bg-curri-teal/10 text-curri-teal',
    weak: 'bg-curri-brickwork/10 text-curri-brickwork',
    neutral: 'bg-curri-cement/10 text-curri-cement',
  }[market.badgeType];

  const icon = {
    strong: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={2} stroke="currentColor">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    weak: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={2} stroke="currentColor">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    neutral: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={2} stroke="currentColor">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  }[market.badgeType];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-curri-blacktop/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-50 transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-curri-blacktop" fill="none" strokeWidth={2} stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={`p-10 border-l-4 ${accentColor} min-h-full`}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
              {icon}
            </div>
            <div>
              <span className="text-sm font-medium text-curri-cement">{market.name}</span>
              <h2 className="text-2xl font-bold text-curri-blacktop tracking-tight">{market.detailTitle}</h2>
            </div>
          </div>

          {/* Stats summary */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-curri-drywall rounded-xl">
            {market.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-lg font-bold ${
                  stat.type === 'positive' ? 'text-curri-teal' : 
                  stat.type === 'negative' ? 'text-curri-brickwork' : 
                  'text-curri-blacktop'
                }`}>
                  {stat.value}
                </div>
                <div className="text-xs text-curri-cement">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="text-curri-blacktop leading-relaxed">
            {market.detailContent}
          </div>
        </div>
      </div>
    </>
  );
}

export function Markets() {
  const [selectedMarket, setSelectedMarket] = useState<MarketData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (market: MarketData) => {
    setSelectedMarket(market);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="markets" className="bg-curri-drywall py-24 px-8">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-4">
            Market Assessment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-curri-blacktop tracking-tight mb-4">
            Three markets, three stories
          </h2>
          <p className="text-lg text-curri-cement max-w-[600px] mx-auto">
            Click each card for full market breakdown
          </p>
        </div>
        
        {/* Market Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market) => (
            <MarketCard 
              key={market.id} 
              market={market} 
              onClick={() => handleCardClick(market)}
            />
          ))}
        </div>

        {/* View Dataset Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://docs.google.com/spreadsheets/d/1J2zHrMu2mpwmstBONYkOYjFi0ATibjGn/edit?usp=sharing&ouid=111698837499313009950&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-curri-blacktop text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-xl bg-curri-teal/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-curri-teal/10 to-curri-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Animated border */}
            <span className="absolute inset-0 rounded-xl border border-curri-teal/20 group-hover:border-curri-teal/50 transition-colors duration-300" />
            
            {/* Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 text-curri-teal transition-transform duration-300 group-hover:scale-110" 
              fill="none" 
              strokeWidth={2} 
              stroke="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            
            {/* Text */}
            <span className="relative">View Dataset</span>
            
            {/* Arrow */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 text-curri-teal transition-all duration-300 group-hover:translate-x-1" 
              fill="none" 
              strokeWidth={2} 
              stroke="currentColor"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      <MarketModal 
        market={selectedMarket}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </section>
  );
}
