import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutSalon } from "@/components/home/AboutSalon";
import { Gallery } from "@/components/home/Gallery";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { PracticalInfo } from "@/components/home/PracticalInfo";
import { InstagramSection } from "@/components/home/InstagramSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <AboutSalon />
      <Gallery />
      <ReviewsSection />
      <PracticalInfo />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
