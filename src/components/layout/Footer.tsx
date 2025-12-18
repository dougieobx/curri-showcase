'use client';

const footerLinks = [
  { 
    href: 'https://docs.google.com/document/d/1RHadZhYaRGrlYNQ1saQLBKxOrYjMJ2OTjARYSY435T4/edit?usp=sharing', 
    label: 'Case Study Answers' 
  },
  { 
    href: 'https://docs.google.com/document/d/1QnWIjxaNORKf9FaJ-cFic0gGJ_-SndWea1-PkbCAj_o/edit?usp=sharing', 
    label: 'Prompts' 
  },
  { 
    href: 'https://docs.google.com/spreadsheets/d/1J2zHrMu2mpwmstBONYkOYjFi0ATibjGn/edit?usp=sharing&ouid=111698837499313009950&rtpof=true&sd=true', 
    label: 'Dataset' 
  },
];

export function Footer() {
  return (
    <footer className="bg-curri-blacktop border-t border-white/[0.08] py-8">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <p className="text-sm text-white/60">
            Doug Oberbeck · Supply Engagement Manager Case Study
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-curri-teal transition-colors"
              >
                {link.label}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

