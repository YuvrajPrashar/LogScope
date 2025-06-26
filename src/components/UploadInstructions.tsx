import { CheckCircle, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UploadInstructionsProps {
  isDarkMode: boolean;
}

export const UploadInstructions = ({ isDarkMode }: UploadInstructionsProps) => {
  return (
    <Card
      className={`mb-8 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      <CardHeader>
        <CardTitle className={isDarkMode ? "text-white" : "text-gray-900"}>
          Upload Your Log Files
        </CardTitle>
        <CardDescription
          className={isDarkMode ? "text-slate-400" : "text-gray-600"}
        >
          Upload your log files to analyze and visualize your application logs.
          We support JSON and LOG file formats.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-slate-700/30" : "bg-blue-50"
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle
                className={`h-5 w-5 ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                }`}
              />
              <span
                className={`font-medium ${
                  isDarkMode ? "text-slate-200" : "text-gray-800"
                }`}
              >
                Supported Formats
              </span>
            </div>
            <ul
              className={`text-sm space-y-1 ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              <li>• JSON files (.json)</li>
              <li>• Log files (.log)</li>
            </ul>
          </div>
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-slate-700/30" : "bg-blue-50"
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle
                className={`h-5 w-5 ${
                  isDarkMode ? "text-yellow-400" : "text-yellow-600"
                }`}
              />
              <span
                className={`font-medium ${
                  isDarkMode ? "text-slate-200" : "text-gray-800"
                }`}
              >
                File Requirements
              </span>
            </div>
            <ul
              className={`text-sm space-y-1 ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              <li>• Max file size: 10MB</li>
              <li>• Structured log format</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
