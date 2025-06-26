import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  isDarkMode: boolean;
  onGetStartedClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  isDarkMode,
  onGetStartedClick,
}) => {
  return (
    <section
      className={`py-24 ${
        isDarkMode ? "bg-slate-800/5" : "bg-gray-50/30"
      } relative backdrop-blur-sm overflow-hidden`}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"
              : "bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-cyan-300/10"
          } animate-gradient-x`}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className="opacity-0 animate-fade-in-up [animation-fill-mode:forwards]"
        >
          <h2
            className={`text-5xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } transition-colors duration-700`}
          >
            Ready to Analyze Your Logs?
          </h2>
          <p
            className={`text-xl mb-12 ${
              isDarkMode ? "text-slate-300" : "text-gray-600"
            } transition-colors duration-700 max-w-3xl mx-auto leading-relaxed`}
          >
            Start uploading your logs and discover insights you never knew
            existed. Transform your debugging process with powerful analytics.
          </p>
          <Button
            onClick={onGetStartedClick}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-3 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center">
              Get Started Now
              <ArrowRight className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
