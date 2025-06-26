import React from 'react';

interface AnimatedBackgroundProps {
  isDarkMode: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDarkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-30 ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900"
              : "bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-white"
          } animate-gradient-x`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-2/3 h-2/3 ${
            isDarkMode
              ? "bg-gradient-to-bl from-purple-600/10 via-blue-600/10 to-transparent"
              : "bg-gradient-to-bl from-purple-300/20 via-blue-300/20 to-transparent"
          } rounded-full blur-3xl animate-float`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-2/3 h-2/3 ${
            isDarkMode
              ? "bg-gradient-to-tr from-blue-600/10 via-cyan-600/10 to-transparent"
              : "bg-gradient-to-tr from-blue-300/20 via-cyan-300/20 to-transparent"
          } rounded-full blur-3xl animate-float [animation-delay:3s]`}
        ></div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 ${
            isDarkMode ? "bg-blue-400/20" : "bg-blue-500/10"
          } rounded-full animate-float`}
          data-left={`${Math.random() * 100}%`}
          data-top={`${Math.random() * 100}%`}
          data-delay={`${Math.random() * 6}s`}
          data-duration={`${4 + Math.random() * 4}s`}
        ></div>
      ))}

      {/* Elegant geometric lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="lineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor={
                isDarkMode
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(59, 130, 246, 0.05)"
              }
            />
            <stop
              offset="50%"
              stopColor={
                isDarkMode
                  ? "rgba(147, 51, 234, 0.1)"
                  : "rgba(147, 51, 234, 0.05)"
              }
            />
            <stop
              offset="100%"
              stopColor={
                isDarkMode
                  ? "rgba(6, 182, 212, 0.1)"
                  : "rgba(6, 182, 212, 0.05)"
              }
            />
          </linearGradient>
        </defs>
        <path
          d="M0,300 Q250,200 500,300 T1000,300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-float"
        />
        <path
          d="M0,700 Q250,600 500,700 T1000,700"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-float [animation-delay:2s]"
        />
      </svg>
    </div>
  );
};
