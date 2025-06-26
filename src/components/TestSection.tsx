import React from "react";

interface TestSectionProps {
  isDarkMode: boolean;
}

export const TestSection: React.FC<TestSectionProps> = ({ isDarkMode }) => {
  return (
    <section
      className={`py-24 ${isDarkMode ? "bg-red-900/20" : "bg-red-100/20"}`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl font-bold text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          TEST SECTION - FEATURES SHOULD BE HERE
        </h2>
        <p
          className={`text-xl text-center mt-4 ${
            isDarkMode ? "text-slate-300" : "text-gray-600"
          }`}
        >
          This is a test section to verify rendering
        </p>
      </div>
    </section>
  );
};
