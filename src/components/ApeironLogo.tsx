import React from 'react';

interface ApeironLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'emblem-only' | 'app-icon' | 'stacked';
  showSubheading?: boolean;
  showDivider?: boolean;
}

export const ApeironLogo: React.FC<ApeironLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showSubheading = true,
  showDivider = true,
}) => {
  const emblemSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-11 sm:h-11',
    xl: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const wordmarkSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl lg:text-[22px]',
    xl: 'text-2xl sm:text-3xl',
  };

  const subheadingSizes = {
    sm: 'text-[7.5px] sm:text-[8px] tracking-[0.24em]',
    md: 'text-[8px] sm:text-[9px] tracking-[0.26em]',
    lg: 'text-[9.5px] sm:text-[10px] tracking-[0.28em]',
    xl: 'text-xs sm:text-[13px] tracking-[0.32em]',
  };

  const dividerHeights = {
    sm: 'h-5 sm:h-6',
    md: 'h-6 sm:h-7',
    lg: 'h-7 sm:h-8',
    xl: 'h-10 sm:h-12',
  };

  // Official Transparent 3D Metallic Shield Emblem
  // No square container, no square background, object-fit contain, contoured dual glow
  const renderOfficialEmblem = (customClass = '') => (
    <div
      className={`relative ${customClass} select-none shrink-0 flex items-center justify-center p-0 m-0 bg-transparent`}
    >
      <img
        src="/assets/apeiron-emblem-3d.png"
        alt="Apeiron Official Geometric Shield Emblem"
        className="w-full h-full object-contain p-0 m-0 block filter drop-shadow-[0_0_7px_rgba(112,34,252,0.65)] drop-shadow-[2px_0_5px_rgba(253,191,50,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(112,34,252,0.85)] group-hover:drop-shadow-[3px_0_7px_rgba(253,191,50,0.45)]"
      />
    </div>
  );

  if (variant === 'app-icon') {
    return (
      <div className={`relative ${emblemSizes[size]} shrink-0 flex items-center justify-center p-0 m-0 bg-transparent ${className}`}>
        <img
          src="/assets/apeiron-app-icon.png"
          alt="Apeiron Official App Icon"
          className="w-full h-full object-contain rounded-xl shadow-[0_0_15px_rgba(112,34,252,0.35)]"
        />
      </div>
    );
  }

  if (variant === 'emblem-only') {
    return renderOfficialEmblem(`${emblemSizes[size]} ${className}`);
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {renderOfficialEmblem(`${emblemSizes[size]} mb-2`)}
        <div className="flex flex-col items-center tracking-tight leading-none">
          {/* Entire APEIRON wordmark in pure solid white #FFFFFF */}
          <span className={`font-extrabold uppercase text-white font-sans tracking-[0.24em] ${wordmarkSizes[size]}`}>
            APEIRON
          </span>
          {showSubheading && (
            <span className={`uppercase text-[#A8A8B5] font-semibold mt-1.5 ${subheadingSizes[size]}`}>
              FRONTIER SECURITY
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Combination for Navigation Header
  // display: flex with align-items: center for true vertical center alignment of emblem and text block
  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* 1. Shield Emblem: transparent PNG with object-fit contain and contoured purple/orange glow */}
      {renderOfficialEmblem(emblemSizes[size])}

      {/* 2. Subtle vertical hairline divider with balanced spacing */}
      {showDivider && (
        <div
          className={`w-[1px] ${dividerHeights[size]} bg-gradient-to-b from-white/10 via-white/25 to-white/10 shrink-0`}
          aria-hidden="true"
        />
      )}

      {/* 3. Text Block: APEIRON wordmark (100% pure white #FFFFFF) and FRONTIER SECURITY subtitle (#A8A8B5), left-aligned with each other */}
      <div className="flex flex-col justify-center items-start text-left leading-none tracking-tight">
        {/* APEIRON Wordmark - pure white #FFFFFF for all letters (A, P, E, I, R, O, N) */}
        <span className={`font-extrabold uppercase text-white font-sans tracking-[0.24em] text-left m-0 p-0 ${wordmarkSizes[size]}`}>
          APEIRON
        </span>

        {/* FRONTIER SECURITY Subtitle - Muted silver #A8A8B5, left-aligned with APEIRON */}
        {showSubheading && (
          <span className={`uppercase text-[#A8A8B5] font-semibold mt-1 text-left block ${subheadingSizes[size]}`}>
            FRONTIER SECURITY
          </span>
        )}
      </div>
    </div>
  );
};
