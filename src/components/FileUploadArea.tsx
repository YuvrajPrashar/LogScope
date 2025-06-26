import React from "react";
import { Upload as UploadIcon, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FileUploadAreaProps {
  selectedFile: File | null;
  dragActive: boolean;
  isDarkMode: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  formatFileSize: (bytes: number) => string;
}

export const FileUploadArea = ({
  selectedFile,
  dragActive,
  isDarkMode,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileInput,
  onSubmit,
  formatFileSize,
}: FileUploadAreaProps) => {
  return (
    <Card
      className={
        isDarkMode
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white border-gray-200"
      }
    >
      <CardContent className="p-8">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? isDarkMode
                ? "border-blue-400 bg-blue-400/10"
                : "border-blue-500 bg-blue-50"
              : isDarkMode
              ? "border-slate-600 hover:border-slate-500"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div className="space-y-4">
            <div className="flex justify-center">
              <FileText
                className={`h-16 w-16 ${
                  isDarkMode ? "text-slate-400" : "text-gray-400"
                }`}
              />
            </div>

            {selectedFile ? (
              <SelectedFileDisplay
                selectedFile={selectedFile}
                formatFileSize={formatFileSize}
                isDarkMode={isDarkMode}
              />
            ) : (
              <EmptyUploadDisplay isDarkMode={isDarkMode} />
            )}

            <input
              type="file"
              accept=".json,.log"
              onChange={onFileInput}
              className="hidden"
              id="file-upload"
              aria-label="Upload log file"
            />

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => document.getElementById("file-upload")?.click()}
                className={
                  isDarkMode
                    ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }
              >
                <UploadIcon className="h-4 w-4 mr-2" />
                Choose File
              </Button>

              {selectedFile && (
                <Button
                  onClick={onSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Upload & Analyze
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface SelectedFileDisplayProps {
  selectedFile: File;
  formatFileSize: (bytes: number) => string;
  isDarkMode: boolean;
}

const SelectedFileDisplay = ({
  selectedFile,
  formatFileSize,
  isDarkMode,
}: SelectedFileDisplayProps) => {
  return (
    <div className="space-y-2">
      <div
        className={`text-lg font-medium ${
          isDarkMode ? "text-green-400" : "text-green-600"
        }`}
      >
        File Selected
      </div>
      <div
        className={`p-4 rounded-lg ${
          isDarkMode ? "bg-slate-700/50" : "bg-gray-100"
        }`}
      >
        <div
          className={`font-medium ${
            isDarkMode ? "text-slate-200" : "text-gray-800"
          }`}
        >
          {selectedFile.name}
        </div>
        <div
          className={`text-sm ${
            isDarkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          {formatFileSize(selectedFile.size)}
        </div>
      </div>
    </div>
  );
};

interface EmptyUploadDisplayProps {
  isDarkMode: boolean;
}

const EmptyUploadDisplay = ({ isDarkMode }: EmptyUploadDisplayProps) => {
  return (
    <div className="space-y-2">
      <div
        className={`text-lg font-medium ${
          isDarkMode ? "text-slate-200" : "text-gray-800"
        }`}
      >
        Drop your log files here
      </div>
      <div
        className={`text-sm ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}
      >
        or click to browse your files
      </div>
    </div>
  );
};
