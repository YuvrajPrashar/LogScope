import React from 'react';
import { Upload, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  isDarkMode: boolean;
  onUploadClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkMode,
  onUploadClick,
  onExploreClick,
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center space-y-8 relative z-10">
          <div className="transform transition-all duration-1000 hover:scale-105">
            <div
              className="mb-8 opacity-0 animate-fade-in-up [animation-delay:0.1s] [animation-fill-mode:forwards]"
            >
              <div
                className={`inline-block px-4 py-2 rounded-full ${
                  isDarkMode
                    ? "bg-blue-400/10 border border-blue-400/20"
                    : "bg-blue-100 border border-blue-200"
                } backdrop-blur-sm`}
              >
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  ✨ Advanced Log Analytics Platform
                </span>
              </div>
            </div>

            <h1
              className={`text-6xl md:text-8xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              } transition-all duration-700 opacity-0 animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:forwards]`}
            >
              Analyze Your{" "}
              <span
                className={`bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-400 via-purple-400 to-cyan-400"
                    : "from-blue-600 via-purple-600 to-cyan-600"
                } bg-clip-text text-transparent bg-size-200 animate-gradient-x relative`}
              >
                Logs
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-400/20 via-purple-400/20 to-cyan-400/20"
                      : "from-blue-600/10 via-purple-600/10 to-cyan-600/10"
                  } blur-2xl animate-pulse -z-10`}
                ></div>
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl max-w-4xl mx-auto ${
                isDarkMode ? "text-slate-300" : "text-gray-600"
              } transition-all duration-700 opacity-0 animate-fade-in-up leading-relaxed [animation-delay:0.4s] [animation-fill-mode:forwards]`}
            >
              Upload, search, filter, and visualize your application logs with
              powerful analytics and beautiful charts. Transform raw data into
              actionable insights.
            </p>
          </div>

          <div
            className="opacity-0 animate-fade-in-up [animation-delay:0.6s] [animation-fill-mode:forwards]"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onUploadClick}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Upload className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Upload Logs</span>
              </Button>

              <Button
                variant="outline"
                onClick={onExploreClick}
                className={`px-8 py-4 text-lg rounded-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 group ${
                  isDarkMode
                    ? "border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                <Activity className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
