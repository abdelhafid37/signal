import AboutTeaser from "@/components/sections/home/AboutTeaser";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutTeaser />
      <FeaturedWork />
      <Testimonials />
      <CTABanner eyebrow="Let's talk" heading="Ready to be seen everywhere?" />
    </>
  );
}
