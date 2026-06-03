import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoinRenda from "@/components/careers/WhyJoinRenda";
import WorkingPrinciples from "@/components/careers/WorkingPrinciples";
import TeamGallery from "@/components/careers/TeamGallery";
import CultureValues from "@/components/careers/CultureValues";
import DiversitySection from "@/components/careers/DiversitySection";
import Benefits from "@/components/careers/Benefits";
import OpenRoles from "@/components/careers/OpenRoles";
import EarlyTalent from "@/components/careers/EarlyTalent";
import CareersCTA from "@/components/careers/CareersCTA";

function Divider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-[2px] bg-black/15 rounded-full" />
    </div>
  );
}

export default function Careers() {
  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />
      <CareersHero />
      <WhyJoinRenda />
      <Divider />
      <WorkingPrinciples />
      <Divider />
      <TeamGallery />
      <Divider />
      <CultureValues />
      <Divider />
      <DiversitySection />
      <Divider />
      <Benefits />
      <Divider />
      <OpenRoles />
      <Divider />
      <EarlyTalent />
      <Divider />
      <CareersCTA />
      <Footer />
    </main>
  );
}
