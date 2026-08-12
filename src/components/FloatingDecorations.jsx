import React from 'react';

export default function FloatingDecorations() {
  const smilePath = "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-3-9c.83 0 1.5-.67 1.5-1.5S9.83 8 9 8s-1.5.67-1.5 1.5S6.67 11 7.5 11zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8s-1.5.67-1.5 1.5S15.67 11 16.5 11zm-9 4c1.07 2.36 3.44 4 6.2 4s5.13-1.64 6.2-4H7.5z";
  const starPath = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
  const cloudPath = "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z";
  const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  const toothPath = "M12 2C9.5 2 7 3.5 7 6c0 1.8 1.2 3.5 1.5 5.5.3 2-1 4.5-1 6.5 0 2.5 2 4 4.5 4a3.5 3.5 0 003-1.5 3.5 3.5 0 003 1.5c2.5 0 4.5-1.5 4.5-4 0-2-1.3-4.5-1-6.5.3-2 1.5-3.7 1.5-5.5 0-2.5-2.5-4-5-4-1.5 0-2.5.8-3 1.5-.5-.7-1.5-1.5-3-1.5z";

  const symbols = [
    { path: smilePath, style: { top: '8%', left: '4%' }, anim: 'floating-anim-1', color: 'var(--color-green)' },
    { path: heartPath, style: { top: '38%', right: '5%' }, anim: 'floating-anim-2', color: 'var(--color-pink)' },
    { path: toothPath, style: { top: '72%', left: '8%' }, anim: 'floating-anim-3', color: 'var(--color-blue)' },
    { path: starPath, style: { top: '24%', right: '15%' }, anim: 'floating-anim-4', color: 'var(--color-yellow)' },
    { path: cloudPath, style: { top: '55%', left: '20%' }, anim: 'floating-anim-1', color: 'var(--color-green)' },
    { path: smilePath, style: { top: '85%', right: '25%' }, anim: 'floating-anim-2', color: 'var(--color-pink)' },
    { path: starPath, style: { top: '15%', left: '75%' }, anim: 'floating-anim-3', color: 'var(--color-yellow)' },
    { path: heartPath, style: { top: '45%', left: '42%' }, anim: 'floating-anim-4', color: 'var(--color-pink)' },
    { path: cloudPath, style: { top: '5%', right: '32%' }, anim: 'floating-anim-1', color: 'var(--color-blue)' },
    { path: toothPath, style: { top: '90%', left: '52%' }, anim: 'floating-anim-3', color: 'var(--color-green)' },
    { path: smilePath, style: { top: '65%', right: '8%' }, anim: 'floating-anim-2', color: 'var(--color-pink)' },
    { path: starPath, style: { top: '30%', left: '12%' }, anim: 'floating-anim-3', color: 'var(--color-yellow)' },
    { path: heartPath, style: { top: '50%', right: '48%' }, anim: 'floating-anim-4', color: 'var(--color-pink)' },
    { path: toothPath, style: { top: '82%', left: '15%' }, anim: 'floating-anim-1', color: 'var(--color-blue)' },
    { path: cloudPath, style: { top: '20%', left: '48%' }, anim: 'floating-anim-2', color: 'var(--color-green)' },
    { path: starPath, style: { top: '94%', right: '70%' }, anim: 'floating-anim-3', color: 'var(--color-yellow)' }
  ];

  return (
    <div className="floating-symbols-container">
      {symbols.map((symbol, idx) => (
        <svg 
          key={idx} 
          className={`floating-symbol ${symbol.anim}`} 
          style={{ 
            ...symbol.style, 
            animationDelay: `${idx * 0.5}s`,
            width: 'clamp(20px, 3.2vw, 36px)',
            height: 'clamp(20px, 3.2vw, 36px)',
            fill: symbol.color
          }}
          viewBox="0 0 24 24"
        >
          <path d={symbol.path} />
        </svg>
      ))}
    </div>
  );
}
