import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep dark violet foundation */}
      <div className="absolute inset-0 bg-[#06020e]" />

      {/* Cyber / Tech grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(236, 72, 153, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial soft vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-950/25 via-[#06020e]/60 to-[#06020e]" />

      {/* Moving magenta/purple light blobs */}
      <div
        className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-600/18 to-purple-800/10 blur-[130px] animate-pulse-glow"
        style={{ animationDuration: '9s' }}
      />
      <div
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-700/16 to-pink-500/10 blur-[140px] animate-pulse-glow"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      <div
        className="absolute top-[65%] left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-fuchsia-800/14 to-violet-900/15 blur-[150px] animate-pulse-glow"
        style={{ animationDuration: '11s', animationDelay: '4s' }}
      />
      <div
        className="absolute -bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-t from-pink-600/15 via-purple-900/12 to-transparent blur-[140px] animate-pulse-glow"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />
    </div>
  );
};
