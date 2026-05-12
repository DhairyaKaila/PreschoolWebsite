import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import CurriculumSection from "@/components/CurriculumSection";
import DailyActivitySection from "@/components/DailyActivitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CurriculumSection />
      <DailyActivitySection />
      <TestimonialsSection />
      <InquirySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
