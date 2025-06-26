import { UploadHeader } from "@/components/UploadHeader";
import { UploadInstructions } from "@/components/UploadInstructions";
import { FileUploadArea } from "@/components/FileUploadArea";
import { SecurityNotice } from "@/components/SecurityNotice";
import { useTheme } from "@/hooks/useTheme";
import { useFileUpload } from "@/hooks/useFileUpload";

const Upload = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const {
    selectedFile,
    dragActive,
    handleDrag,
    handleDrop,
    handleFileInput,
    handleSubmit,
    formatFileSize,
  } = useFileUpload();

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <UploadHeader isDarkMode={isDarkMode} onThemeToggle={setIsDarkMode} />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <UploadInstructions isDarkMode={isDarkMode} />

          <FileUploadArea
            selectedFile={selectedFile}
            dragActive={dragActive}
            isDarkMode={isDarkMode}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onFileInput={handleFileInput}
            onSubmit={handleSubmit}
            formatFileSize={formatFileSize}
          />

          <SecurityNotice isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Upload;
