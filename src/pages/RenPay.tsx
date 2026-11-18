import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  RenPayHero,
  HowItWorks,
  Moments,
  SplitAndRequest,
  AlfieDifference,
  RenPayClosing,
  Divider,
} from "@/components/renpay/sections";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

export default function RenPay() {
  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_FONT }}>
      <Navbar variant="solid" />
      <RenPayHero />
      <Divider />
      <HowItWorks />
      <Divider />
      <Moments />
      <Divider />
      <SplitAndRequest />
      <Divider />
      <AlfieDifference />
      <RenPayClosing />
      <Footer />
    </main>
  );
}
