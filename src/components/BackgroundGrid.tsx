
export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="dot-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        {/* Vertical Lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-current to-transparent animate-pulse"
            style={{
              left: `${(i + 1) * 8.33}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '4s'
            }}
          />
        ))}
        
        {/* Horizontal Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-current to-transparent animate-pulse"
            style={{
              top: `${(i + 1) * 12.5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '5s'
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/10" />
      
      {/* Corner Accent Grids */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="corner-grid-tl"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corner-grid-tl)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="corner-grid-tr"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corner-grid-tr)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="corner-grid-bl"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corner-grid-bl)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="corner-grid-br"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corner-grid-br)" />
        </svg>
      </div>
    </div>
  );
};
