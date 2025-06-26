import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navigateToUpload = () => {
    navigate("/upload");
  };

  const navigateToLogs = () => {
    navigate("/logs");
  };

  return {
    isDarkMode,
    setIsDarkMode,
    navigateToUpload,
    navigateToLogs,
  };
};
