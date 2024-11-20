import Image from "next/image";
import HeroSection from "@/components/HeroSection.tsx";
import FeaturedCourses from "@/components/FeaturedCourses.tsx";
import WhyChooseUs from "@/components/WhyChooseUs.tsx";
import MusicSchoolTestimonials from "@/components/TestimonialCards.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
    </main>
  );
}
