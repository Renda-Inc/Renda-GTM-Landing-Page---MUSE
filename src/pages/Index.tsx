import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/landing/Footer";
import FAQ from "@/components/landing/FAQ";
import PartnersMarquee from "@/components/landing/PartnersMarquee";
import {
  Divider,
  SmartAccounts,
  CardSection,
  SavingGoals,
  SendMoney,
  ThinkAhead,
  MeetAlfie,
  DailyMoney,
  ComingSoon,
  HomeCTA,
  Pricing,
} from "@/components/home/HomeSections";

const Index = () => {
  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />
      <HeroSection />
      <SmartAccounts />
      <CardSection />
      <SavingGoals />
      <Divider />
      <SendMoney />
      <Divider />
      <ThinkAhead />
      <Divider />
      <MeetAlfie />
      <Divider />
      <DailyMoney />
      <Divider />
      <ComingSoon />
      <Divider />
      <FAQ />
      <PartnersMarquee />
      <HomeCTA />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
