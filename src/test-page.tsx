import React from "react";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

const TestPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center py-8">TEST PAGE</h1>
      <FeaturesSection isDarkMode={false} />
      <HowItWorksSection isDarkMode={false} />
    </div>
  );
};

export default TestPage;
