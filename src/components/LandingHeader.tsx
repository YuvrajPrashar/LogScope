import React from 'react';
import { FileText, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface LandingHeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <header
      className={`border-b transition-all duration-500 ${
        isDarkMode
          ? "border-slate-700/30 bg-slate-800/10"
          : "border-gray-200/30 bg-white/10"
      } backdrop-blur-2xl sticky top-0 z-50`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 group">
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
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              } transition-colors duration-300`}
            >
              LogViewer
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun
                className={`h-4 w-4 transition-all duration-300 ${
                  isDarkMode
                    ? "text-slate-400 scale-90"
                    : "text-yellow-500 scale-110"
                }`}
              />
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Moon
                className={`h-4 w-4 transition-all duration-300 ${
                  isDarkMode
                    ? "text-blue-400 scale-110"
                    : "text-slate-400 scale-90"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
