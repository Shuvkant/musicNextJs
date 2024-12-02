import Image from "next/image";
import HeroSection from "@/components/HeroSection.tsx";
import FeaturedCourses from "@/components/FeaturedCourses.tsx";
import WhyChooseUs from "@/components/WhyChooseUs.tsx";
import MusicSchoolTestimonials from "@/components/TestimonialCards.tsx";
import UpcomingWebinars from "@/components/UpcomingWebinars.tsx";
import Instructors from "@/components/Instructors.tsx";
import Footer from "@/components/Footer.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
