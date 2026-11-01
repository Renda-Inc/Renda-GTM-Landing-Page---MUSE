import Header from "@/components/alfie-platform/Header";
import Hero from "@/components/alfie-platform/Hero";
import Marquee from "@/components/alfie-platform/Marquee";
import Capabilities from "@/components/alfie-platform/Capabilities";
import DataToDecisions from "@/components/alfie-platform/DataToDecisions";
import Organizations from "@/components/alfie-platform/Organizations";
import BuildWithAlfieCTA from "@/components/alfie-platform/BuildWithAlfieCTA";
import AlfieFooter from "@/components/alfie-platform/AlfieFooter";

const SF_PRO = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';
const BG = "#000000";

/* ---------------- page ---------------- */

export default function AlfiePlatform() {
  return (
    <main className="alfie-platform min-h-screen" style={{ fontFamily: SF_PRO, backgroundColor: BG }}>
      <Header />
      <Hero />
      <Marquee />
      <Capabilities />
      <DataToDecisions />
      <Organizations />
      <BuildWithAlfieCTA />
      <AlfieFooter />
    </main>
  );
}
