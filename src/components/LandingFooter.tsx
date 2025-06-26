import React from "react";
import { FileText } from "lucide-react";

interface LandingFooterProps {
  isDarkMode: boolean;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({ isDarkMode }) => {
  return (
    <footer
      className={`border-t ${
        isDarkMode
          ? "border-slate-700/30 bg-slate-800/10"
          : "border-gray-200/30 bg-white/10"
      } py-12 backdrop-blur-2xl`}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6 transform transition-all duration-500 hover:scale-105 group">
          <div
            className={`p-2 rounded-xl ${
              isDarkMode
                ? "bg-blue-400/10 group-hover:bg-blue-400/20"
                : "bg-blue-100 group-hover:bg-blue-200"
            } transition-all duration-300`}
          >
            <FileText
              className={`h-6 w-6 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              } transition-colors duration-300`}
            />
          </div>
          <span
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } transition-colors duration-300`}
          >
            LogViewer
          </span>
        </div>
        <p
          className={`text-base ${
            isDarkMode ? "text-slate-400" : "text-gray-600"
          } transition-colors duration-300`}
        >
          Powerful log analysis made simple and beautiful
        </p>
      </div>
    </footer>
  );
};
