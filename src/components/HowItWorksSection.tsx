import React from 'react';
import { Upload, Search, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface HowItWorksSectionProps {
  isDarkMode: boolean;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ isDarkMode }) => {
  const steps: WorkflowStep[] = [
    {
      step: "01",
      title: "Upload Your Logs",
      description:
        "Upload your JSON or LOG files using our intuitive drag-and-drop interface",
      icon: Upload,
    },
    {
      step: "02",
      title: "Search & Filter",
      description:
        "Use advanced search and filtering to find exactly what you need instantly",
      icon: Search,
    },
    {
      step: "03",
      title: "Analyze & Visualize",
      description:
        "View comprehensive statistics, charts, and insights from your log data",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } transition-all duration-700`}
          >
            How It Works
          </h2>
          <p
            className={`text-xl ${
              isDarkMode ? "text-slate-300" : "text-gray-600"
            } transition-all duration-700 max-w-2xl mx-auto`}
          >
            Get started in three simple steps and unlock the power of your log
            data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="text-center group opacity-0 animate-fade-in-up relative"
              data-animation-delay={`${index * 0.2}s`}
            >
              {/* Connection line */}
              {index < 2 && (
                <div
                  className={`hidden md:block absolute top-10 left-full w-full h-0.5 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400/30 to-purple-400/30"
                      : "bg-gradient-to-r from-blue-300/50 to-purple-300/50"
                  } transform -translate-x-1/2 z-0`}
                ></div>
              )}

              <div
                className={`w-24 h-24 rounded-full ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-cyan-400/10 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-cyan-400/20"
                    : "bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-cyan-200"
                } flex items-center justify-center mx-auto mb-6 transition-all duration-700 group-hover:scale-125 group-hover:-translate-y-4 relative z-10 border-2 ${
                  isDarkMode
                    ? "border-slate-700/50 group-hover:border-blue-400/30"
                    : "border-gray-200/50 group-hover:border-blue-300/50"
                }`}
              >
                <item.icon
                  className={`h-10 w-10 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-all duration-500 group-hover:scale-110`}
                />
              </div>

              <div
                className={`text-sm font-bold ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                } mb-3 tracking-wider transition-colors duration-300`}
              >
                STEP {item.step}
              </div>

              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } transition-colors duration-300`}
              >
                {item.title}
              </h3>

              <p
                className={`${
                  isDarkMode ? "text-slate-300" : "text-gray-600"
                } transition-colors duration-300 leading-relaxed text-lg`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
