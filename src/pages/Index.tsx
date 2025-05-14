import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/pricing/PricingSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />

        {/* Pricing Section */}
        <PricingSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Call to Action */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
