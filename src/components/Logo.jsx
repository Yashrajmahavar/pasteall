import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '', size = 'md' }) {
  // Original sleek corporate sizing
  const sizeClasses = {
    sm: 'h-9 sm:h-11',
    md: 'h-14 sm:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24'
  }[size] || 'h-14 sm:h-16';

  const isLight = variant === 'light'; // For dark backgrounds (e.g. footer)

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center group focus:outline-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="HXRAO Overseas Exports Private Limited"
    >
      {isLight ? (
        /* Dark background container (footer): Crisp white frosted glass panel */
        <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl inline-flex items-center justify-center">
          <img
            src="/logo.png"
            alt="HXRAO Overseas Exports Private Limited Official Logo"
            className={`${sizeClasses} w-auto object-contain block`}
            loading="eager"
          />
        </div>
      ) : (
        /* Light background container (navbar): Direct transparent presentation */
        <div className="relative inline-flex items-center">
          <img
            src="/logo.png"
            alt="HXRAO Overseas Exports Private Limited Official Logo"
            className={`${sizeClasses} w-auto object-contain block`}
            loading="eager"
          />
        </div>
      )}
    </Link>
  );
}
