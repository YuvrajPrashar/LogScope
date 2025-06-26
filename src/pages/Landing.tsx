import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LandingHeader } from "@/components/LandingHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CTASection } from "@/components/CTASection";
import { LandingFooter } from "@/components/LandingFooter";
import { useLandingPage } from "@/hooks/useLandingPage";

const Landing = () => {
  const {
    isDarkMode,
    setIsDarkMode,
    navigateToUpload,
    navigateToLogs,
  } = useLandingPage();

  return (
    <div
      className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
        isDarkMode ? "bg-slate-900 text-slate-100" : "bg-white text-gray-900"
      }`}
    >
      <AnimatedBackground isDarkMode={isDarkMode} />
      
      <LandingHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <HeroSection
        isDarkMode={isDarkMode}
        onUploadClick={navigateToUpload}
        onExploreClick={navigateToLogs}
      />
      
      <FeaturesSection isDarkMode={isDarkMode} />
      
      <HowItWorksSection isDarkMode={isDarkMode} />
      
      <CTASection
        isDarkMode={isDarkMode}
        onGetStartedClick={navigateToUpload}
      />
      
      <LandingFooter isDarkMode={isDarkMode} />
    </div>
  );
};

export default Landing;
