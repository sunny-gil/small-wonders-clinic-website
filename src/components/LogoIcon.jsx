import React from 'react';

export default function LogoIcon({ size = 42 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Background backing with rounded custom shape */}
      <rect width="64" height="64" rx="16" fill="url(#logo-grad)" />
      
      {/* Cute Tooth / Child Heart shape */}
      <path 
        d="M32 49C29.5 49 28.5 45.5 28 42.5C27.5 39.5 27 35.5 26 33C25 30.5 22.5 30 20.5 29C17.5 27.5 15.5 24.5 15.5 20.5C15.5 14.5 19.5 11 25.5 11C29 11 31 13 32 14.5C33 13 35 11 38.5 11C44.5 11 48.5 14.5 48.5 20.5C48.5 24.5 46.5 27.5 43.5 29C41.5 30 39 30.5 38 33C37 35.5 36.5 39.5 36 42.5C35.5 45.5 34.5 49 32 49Z" 
        fill="#FFFFFF" 
      />
      
      {/* Cute smiling face details */}
      <circle cx="26" cy="22" r="3" fill="#1A535C" />
      <circle cx="38" cy="22" r="3" fill="#1A535C" />
      
      {/* Cheerful blush cheeks */}
      <circle cx="21" cy="26" r="2" fill="#FF8E8E" opacity="0.7" />
      <circle cx="43" cy="26" r="2" fill="#FF8E8E" opacity="0.7" />
      
      {/* Smiley arc */}
      <path 
        d="M29 27C30.2 28.5 33.8 28.5 35 27" 
        stroke="#1A535C" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      
      {/* Sparkling Star (Wonders/Brighter Smile) */}
      <path 
        d="M50 10L51.5 13.5L55 15L51.5 16.5L50 20L48.5 16.5L45 15L48.5 13.5L50 10Z" 
        fill="#FFE66D" 
      />
      
      <path 
        d="M12 42L13 44.5L15.5 45.5L13 46.5L12 49L11 46.5L8.5 45.5L11 44.5L12 42Z" 
        fill="#FFE66D" 
      />

      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#FF8E8E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
