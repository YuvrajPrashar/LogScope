import { Search, BarChart3, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isDarkMode: boolean;
  onThemeToggle: (isDark: boolean) => void;
}

export const Header = ({
  searchTerm,
  onSearchChange,
  isDarkMode,
  onThemeToggle,
}: HeaderProps) => {
  return (
    <header
      className={`border-b transition-colors ${
        isDarkMode
          ? "border-slate-700 bg-slate-800/50"
          : "border-gray-200 bg-white/50"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BarChart3
              className={`h-8 w-8 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              LogScope
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun
                className={`h-4 w-4 ${
                  isDarkMode ? "text-slate-400" : "text-yellow-500"
                }`}
              />
              <Switch checked={isDarkMode} onCheckedChange={onThemeToggle} />
              <Moon
                className={`h-4 w-4 ${
                  isDarkMode ? "text-blue-400" : "text-slate-400"
                }`}
              />
            </div>
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
                  isDarkMode ? "text-slate-400" : "text-gray-400"
                }`}
              />
              <Input
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={`w-80 pl-10 ${
                  isDarkMode
                    ? "bg-slate-700/50 border-slate-600 text-slate-100 placeholder-slate-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
