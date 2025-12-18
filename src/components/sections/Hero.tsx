'use client';

import Image from 'next/image';

const rotatingWords = [
  'fair earnings',
  'predictable work',
  'transparent jobs',
  'consistent volume',
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-8 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-curri-teal/[0.08] to-transparent pointer-events-none" />
      
      <div className="max-w-[900px] text-center relative z-10">
        {/* Label */}
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-curri-teal mb-8 opacity-0 animate-fade-in-up delay-1">
          Supply Engagement Strategy
        </span>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-4 opacity-0 animate-fade-in-up delay-2">
          <span className="block">Healthy driver engagement means</span>
          <span className="block text-curri-teal relative h-[1.2em] overflow-hidden">
            {rotatingWords.map((word, index) => (
              <span
                key={word}
                className={`absolute w-full left-0 opacity-0 animate-rotate-word word-delay-${index + 1}`}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-[700px] mx-auto mt-8 leading-relaxed opacity-0 animate-fade-in-up delay-3">
          Drivers onboard fast, accept jobs quickly, and keep coming back.{' '}
          <em className="text-curri-teal not-italic font-medium">
            Curri gets loads covered without escalating payouts.
          </em>
        </p>
        
        {/* Hero Image */}
        <div className="mt-16 relative flex justify-center opacity-0 animate-fade-in-up delay-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] glow-teal pointer-events-none" />
          <div className="relative w-full max-w-[1000px] rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <Image 
              src="/heroimage.jpg"
              alt="Curri Product Dashboard"
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

