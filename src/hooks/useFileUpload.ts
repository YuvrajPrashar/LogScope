import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const allowedTypes = [".json", ".log"];
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

    if (allowedTypes.includes(fileExtension)) {
      setSelectedFile(file);
      toast({
        title: "File selected",
        description: `${file.name} is ready to upload`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select a .json or .log file",
        variant: "destructive",
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      toast({
        title: "Upload successful",
        description: "Redirecting to log viewer...",
      });
      // Redirect to log viewer page
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return {
    selectedFile,
    dragActive,
    handleDrag,
    handleDrop,
    handleFileInput,
    handleSubmit,
    formatFileSize,
  };
};
