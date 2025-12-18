'use client';

import { useState } from 'react';

interface SolutionData {
  id: string;
  title: string;
  description: string;
  category: 'incentives' | 'matching' | 'trust' | 'feedback';
  effort: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  detailDescription: string;
  tactics: string[];
  metrics: string[];
}

const solutions: SolutionData[] = [
  {
    id: 'incentives',
    title: 'Reward consistency, not randomness',
    description: 'Targeted incentives that reward repeat behavior in hard-to-cover windows like weekday mornings.',
    category: 'incentives',
    effort: 'medium',
    impact: 'high',
    detailDescription: 'The point isn\'t to throw money everywhere. It\'s to create a reliable pattern where drivers know, "If I open Curri during these times, I\'m likely to get work and make it worth my time."',
    tactics: [
      'Incentivize repeat behavior in specific time windows',
      'Focus on hard-to-cover periods (weekday mornings)',
      'Build predictable earning patterns',
    ],
    metrics: ['Week-over-week retention', 'Days active per week'],
  },
  {
    id: 'matching',
    title: 'Make offers worth accepting',
    description: 'Tighten offer routing so drivers get fewer bad fits and more jobs that match their vehicle and willingness to drive.',
    category: 'matching',
    effort: 'medium',
    impact: 'high',
    detailDescription: 'If drivers are seeing lots of offers that aren\'t a good fit (too far, too much effort, unclear details), they\'re going to tune Curri out. Better matching makes the platform feel less noisy.',
    tactics: [
      'Route offers based on vehicle type and driver preferences',
      'Reduce "bad fit" offers (too far, unclear details)',
      'Improve acceptance behavior by reducing noise',
    ],
    metrics: ['Offer acceptance rate', 'Time to accept'],
  },
  {
    id: 'trust',
    title: 'Fix the trust killers',
    description: 'Tighten job details, clarify payouts, and fix the support issues that quietly kill engagement.',
    category: 'trust',
    effort: 'low',
    impact: 'high',
    detailDescription: 'Drivers won\'t stick around if the experience feels unpredictable. Wrong job details, unclear payouts, and slow support resolution are the things that quietly kill engagement.',
    tactics: [
      'Tighten job details and payout clarity',
      'Track and fix top driver support issues',
      'Close the loop faster on frustrations',
    ],
    metrics: ['Support ticket rate', 'Driver satisfaction score'],
  },
  {
    id: 'feedback',
    title: 'Driver Pulse feedback system',
    description: 'Lightweight, continuous feedback collection to catch issues early and understand driver sentiment.',
    category: 'feedback',
    effort: 'low',
    impact: 'high',
    detailDescription: 'Lightweight, continuous feedback collection to catch issues early and understand driver sentiment.',
    tactics: [
      'Post-delivery quick pulse (1-2 questions max)',
      'Weekly market health dashboard',
      'Automatic alerts when sentiment drops',
      'Tie feedback to specific improvement actions',
    ],
    metrics: ['Response rate', 'Sentiment trends', 'Issue resolution time'],
  },
];

const categoryStyles = {
  incentives: 'bg-curri-teal/15 text-curri-teal',
  matching: 'bg-curri-craneberry/15 text-curri-craneberry',
  trust: 'bg-curri-hiviz/20 text-curri-blacktop',
  feedback: 'bg-curri-brickwork/15 text-curri-brickwork',
};

const categoryLabels = {
  incentives: 'Incentives',
  matching: 'Matching',
  trust: 'Trust',
  feedback: 'Feedback',
};

function ExpandableCard({ solution }: { solution: SolutionData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`rounded-xl transition-all duration-300 overflow-hidden border ${
        isExpanded 
          ? 'bg-curri-teal/[0.05] border-curri-teal/30' 
          : 'bg-white border-curri-blacktop/[0.08] hover:border-curri-blacktop/[0.15]'
      }`}
    >
      {/* Card Header - Compact */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-6"
      >
        {/* Title */}
        <h3 className={`text-base font-semibold transition-colors ${
          isExpanded ? 'text-curri-teal' : 'text-curri-blacktop'
        }`}>
          {solution.title}
        </h3>
        
        {/* Right side: Tag + Effort/Impact + Chevron */}
        <div className="flex items-center gap-4 shrink-0">
          <span className={`text-[0.6875rem] font-medium px-2.5 py-1 rounded-full ${categoryStyles[solution.category]}`}>
            {categoryLabels[solution.category]}
          </span>
          <span className="text-[0.75rem] text-curri-cement">
            Effort: <span className={`font-medium ${
              solution.effort === 'low' ? 'text-curri-teal' : 'text-amber-500'
            }`}>{solution.effort}</span>
          </span>
          <span className="text-[0.75rem] text-curri-cement">
            Impact: <span className="font-medium text-curri-teal">{solution.impact}</span>
          </span>
          
          {/* Chevron */}
          <svg 
            viewBox="0 0 24 24" 
            className={`w-5 h-5 text-curri-cement transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            strokeWidth={2} 
            stroke="currentColor"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Expandable Content */}
      <div className={`grid transition-all duration-300 ease-out ${
        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 border-t border-curri-blacktop/[0.08]">
            <p className="text-base text-curri-cement leading-relaxed mb-6">
              {solution.detailDescription}
            </p>
            
            {/* Tactics */}
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-curri-blacktop mb-3">
              Specific Tactics
            </div>
            <ul className="mb-6 space-y-2">
              {solution.tactics.map((tactic, i) => (
                <li key={i} className="relative pl-4 text-sm text-curri-cement leading-relaxed">
                  <span className="absolute left-0 top-[0.45rem] w-1.5 h-1.5 bg-curri-teal rounded-full" />
                  {tactic}
                </li>
              ))}
            </ul>
            
            {/* Metrics */}
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-curri-blacktop mb-3">
              Success Metrics
            </div>
            <div className="flex flex-wrap gap-2">
              {solution.metrics.map((metric, i) => (
                <span key={i} className="text-[0.8125rem] font-medium px-3 py-1.5 bg-curri-blacktop/[0.05] rounded-lg text-curri-cement">
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Solution() {
  return (
    <section id="solution" className="bg-curri-drywall py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Two Column Layout - Items Centered */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
          {/* Left: Expandable Cards */}
          <div className="flex flex-col gap-3 flex-1 lg:max-w-[720px]">
            {solutions.map((solution) => (
              <ExpandableCard key={solution.id} solution={solution} />
            ))}
          </div>

          {/* Right: Header Content - Centered with Cards */}
          <div className="lg:w-[340px] lg:shrink-0">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-3">
              The Fix
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-curri-blacktop mb-4 leading-tight">
              Four levers that actually deliver
            </h2>
            <p className="text-lg text-curri-cement leading-relaxed">
              Curri makes it easier for drivers to show up, get a job quickly, and feel like it&apos;s worth their time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
