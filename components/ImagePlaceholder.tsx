interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}

export default function ImagePlaceholder({ src, alt, className = "", label }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-[#3D5229]/20 flex flex-col items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="text-center p-4">
        <div className="w-10 h-10 rounded-full bg-[#C4A265]/20 flex items-center justify-center mx-auto mb-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A265" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        <p className="text-xs text-[#6B6B6B] font-medium">{label || src}</p>
        <p className="text-xs text-[#6B6B6B]/60 mt-0.5">{alt}</p>
      </div>
    </div>
  );
}
