import React from 'react';

interface WavingBritishFlagProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WavingBritishFlag: React.FC<WavingBritishFlagProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: { width: 140, height: 90, poleHeight: 130 },
    md: { width: 200, height: 125, poleHeight: 180 },
    lg: { width: 280, height: 175, poleHeight: 250 },
  };

  const { width, height, poleHeight } = sizeMap[size];

  return (
    <div className={`relative inline-flex items-start select-none ${className}`}>
      {/* Flagpole */}
      <div className="relative flex flex-col items-center mr-1 z-20">
        {/* Golden Finial Ball */}
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-md border border-amber-300" />
        {/* Brass Pole */}
        <div
          className="w-1.5 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-800 rounded-b shadow-sm"
          style={{ height: `${poleHeight}px` }}
        />
        {/* Pole Base Pedestal */}
        <div className="w-5 h-2 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-800 rounded-full shadow-sm -mt-0.5" />
      </div>

      {/* Flag Cloth Container with Wind Wave Animation */}
      <div
        className="relative origin-left overflow-hidden rounded-r-sm shadow-xl cursor-pointer group"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          perspective: '800px',
        }}
      >
        {/* Union Jack SVG */}
        <svg
          viewBox="0 0 60 30"
          className="w-full h-full flag-cloth-wave"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <clipPath id="flag-clip">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id="flag-diagonals">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath="url(#flag-clip)">
            {/* Deep Blue Field */}
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            {/* White Diagonals (St Andrew's Cross) */}
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
            {/* Red Diagonals (St Patrick's Cross) counterchanged */}
            <path
              d="M0,0 L60,30 M60,0 L0,30"
              clipPath="url(#flag-diagonals)"
              stroke="#C8102E"
              strokeWidth="4"
            />
            {/* White St George's Cross background */}
            <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
            {/* Red St George's Cross */}
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>

        {/* Dynamic Light & Shadow Ripples moving across flag cloth */}
        <div className="absolute inset-0 pointer-events-none flag-shadow-wave mix-blend-multiply opacity-60" />
        <div className="absolute inset-0 pointer-events-none flag-light-wave mix-blend-overlay opacity-40" />
      </div>
    </div>
  );
};
