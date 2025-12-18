'use client';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  aspectRatio?: string;
  label?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export function ImagePlaceholder({
  width = '100%',
  height,
  aspectRatio = '16/9',
  label = 'Image Placeholder',
  variant = 'dark',
  className = '',
}: ImagePlaceholderProps) {
  const bgClass = variant === 'dark' 
    ? 'bg-gradient-to-br from-white/[0.06] to-white/[0.02] border-white/10' 
    : 'bg-gradient-to-br from-black/[0.04] to-black/[0.02] border-black/10';
  
  const textClass = variant === 'dark' ? 'text-white/25' : 'text-black/25';
  const iconClass = variant === 'dark' ? 'stroke-white/15' : 'stroke-black/15';

  return (
    <div 
      className={`relative rounded-xl border flex flex-col items-center justify-center gap-3 overflow-hidden ${bgClass} ${className}`}
      style={{ 
        width, 
        height, 
        aspectRatio: height ? undefined : aspectRatio 
      }}
    >
      {/* Browser chrome effect for mockups */}
      <div className={`absolute top-0 left-0 right-0 h-10 ${variant === 'dark' ? 'bg-white/[0.03] border-b border-white/[0.05]' : 'bg-black/[0.03] border-b border-black/[0.05]'}`}>
        <div className="flex items-center gap-2 px-4 h-full">
          <div className={`w-3 h-3 rounded-full ${variant === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
          <div className={`w-3 h-3 rounded-full ${variant === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
          <div className={`w-3 h-3 rounded-full ${variant === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
        </div>
      </div>
      
      <svg 
        viewBox="0 0 24 24" 
        className={`w-12 h-12 ${iconClass}`}
        fill="none"
        strokeWidth={1}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      
      <span className={`text-sm font-medium ${textClass}`}>{label}</span>
    </div>
  );
}

