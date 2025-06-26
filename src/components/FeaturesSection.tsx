import React from 'react';
import {
  BarChart3,
  Search,
  Filter,
  Flag,
  Activity,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  isDarkMode: boolean;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ isDarkMode }) => {
  const features: Feature[] = [
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Search through your logs with powerful filtering capabilities",
    },
    {
      icon: Filter,
      title: "Key-Value Filtering",
      description:
        "Filter logs based on specific key-value pairs and log levels",
    },
    {
      icon: Flag,
      title: "Log Flagging",
      description:
        "Flag important logs and view them separately for quick access",
    },
    {
      icon: BarChart3,
      title: "Visual Analytics",
      description: "See statistics and charts showing log patterns over time",
    },
    {
      icon: Activity,
      title: "Real-time Analysis",
      description: "Analyze log frequency and patterns with interactive charts",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast log processing and visualization",
    },
  ];

  return (
    <section
      className={`py-24 ${
        isDarkMode ? "bg-slate-800/5" : "bg-gray-50/30"
      } relative backdrop-blur-sm`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } transition-all duration-700`}
          >
            Powerful Features
          </h2>
          <p
            className={`text-xl ${
              isDarkMode ? "text-slate-300" : "text-gray-600"
            } transition-all duration-700 max-w-2xl mx-auto`}
          >
            Everything you need to analyze and understand your logs with
            advanced filtering and beautiful visualizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 cursor-pointer relative overflow-hidden ${
                isDarkMode
                  ? "bg-slate-800/20 border border-slate-700/30 hover:bg-slate-700/20 hover:border-slate-600/40"
                  : "bg-white/60 border border-gray-200/40 hover:bg-white/90 hover:border-gray-300/60"
              } backdrop-blur-xl hover:shadow-2xl opacity-0 animate-fade-in-up`}
              data-animation-delay={`${index * 0.1}s`}
            >
              {/* Card background glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  isDarkMode
                    ? "from-blue-400/5 via-purple-400/5 to-cyan-400/5"
                    : "from-blue-100/30 via-purple-100/30 to-cyan-100/30"
                } blur-xl`}
              ></div>

              <div
                className={`w-16 h-16 rounded-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:from-blue-400/20 group-hover:to-purple-400/20"
                    : "bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200"
                } flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10`}
              >
                <feature.icon
                  className={`h-8 w-8 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-all duration-500 group-hover:scale-110`}
                />
              </div>

              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } transition-colors duration-300 relative z-10`}
              >
                {feature.title}
              </h3>

              <p
                className={`${
                  isDarkMode ? "text-slate-300" : "text-gray-600"
                } transition-colors duration-300 leading-relaxed relative z-10`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
