import AboutTeaser from "@/components/sections/home/AboutTeaser";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesPreview from "@/components/sections/home/ServicesPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutTeaser />
      <FeaturedWork />
    </>
  );
}
