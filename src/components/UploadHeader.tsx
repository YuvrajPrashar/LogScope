import { Upload as UploadIcon, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

interface UploadHeaderProps {
  isDarkMode: boolean;
  onThemeToggle: (isDark: boolean) => void;
}

export const UploadHeader = ({
  isDarkMode,
  onThemeToggle,
}: UploadHeaderProps) => {
  const navigate = useNavigate();

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
            <UploadIcon
              className={`h-8 w-8 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Upload Logs
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
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className={
                isDarkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            >
              View Logs
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
