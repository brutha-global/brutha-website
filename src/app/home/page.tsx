import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
      <Footer />
    </>
  );
}
