import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoinRenda from "@/components/careers/WhyJoinRenda";
import WorkingPrinciples from "@/components/careers/WorkingPrinciples";
import CultureValues from "@/components/careers/CultureValues";
import DiversitySection from "@/components/careers/DiversitySection";
import Benefits from "@/components/careers/Benefits";
import OpenRoles from "@/components/careers/OpenRoles";
import EarlyTalent from "@/components/careers/EarlyTalent";
import CareersCTA from "@/components/careers/CareersCTA";

export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CareersHero />
      <WhyJoinRenda />
      <WorkingPrinciples />
      <CultureValues />
      <DiversitySection />
      <Benefits />
      <OpenRoles />
      <EarlyTalent />
      <CareersCTA />
      <Footer />
    </main>
  );
}
