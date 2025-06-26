import { useState, useEffect } from "react";

export const useTheme = (initialDarkMode: boolean = true) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    setIsDarkMode,
  };
};
