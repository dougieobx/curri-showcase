'use client';

import Link from 'next/link';

const navItems = [
  { href: '#framework', label: 'FRAMEWORK' },
  { href: '#markets', label: 'MARKETS' },
  { href: '#hypothesis', label: 'DEEP DIVE' },
];

export function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-curri-blacktop/95 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo + Nav - Left */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold text-white tracking-[0.15em]">
            DOUG OBERBECK
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-[0.1em]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        {/* CTA Button - Right */}
        <div className="flex items-center">
          <a 
            href="#driver-pulse" 
            onClick={(e) => handleClick(e, '#driver-pulse')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-curri-teal text-curri-blacktop text-sm font-semibold rounded-md hover:bg-curri-teal/90 transition-colors"
          >
            Try Driver Pulse
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

