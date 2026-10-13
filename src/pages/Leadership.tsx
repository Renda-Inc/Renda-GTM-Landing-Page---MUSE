import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import headshotAlexandre from "@/assets/headshot-alexandre.jpg";
import headshotSofia from "@/assets/headshot-sofia.jpg";
import headshotMarcus from "@/assets/headshot-marcus.jpg";
import headshotPriya from "@/assets/headshot-priya.jpg";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const leaders = [
  { name: "Alexandre Dumont", role: "Co-Founder & CEO", photo: headshotAlexandre },
  { name: "Olivia Grant", role: "CEO, Alfie Platforms", photo: headshotPriya },
  { name: "Sofia Chen", role: "Chief Technology Officer", photo: headshotSofia },
  { name: "Yusuf Rahman", role: "Chief Infrastructure Officer", photo: headshotMarcus },
  { name: "Marcus Williams", role: "Chief Operating Officer", photo: headshotMarcus },
  { name: "Claire Bouchard", role: "Chief Revenue Officer", photo: headshotSofia },
  { name: "Priya Sharma", role: "Head of Product", photo: headshotPriya },
  { name: "Daniel Okafor", role: "Chief Financial Officer", photo: headshotMarcus },
  { name: "Isabelle Tremblay", role: "Chief Compliance & Risk Officer", photo: headshotSofia },
  { name: "Liam Carter", role: "Head of Branding, Growth & Marketing", photo: headshotAlexandre },
  { name: "Anika Patel", role: "Head of Data & AI", photo: headshotPriya },
  { name: "Rachel Nguyen", role: "VP, People & Culture", photo: headshotSofia },
  { name: "James Thornton", role: "General Counsel", photo: headshotMarcus },
  { name: "Kofi Asante", role: "Head of Banking Platforms", photo: headshotAlexandre },
];

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function LeaderCard({ leader }: { leader: { name: string; role: string; photo: string } }) {
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-3xl bg-black/5 aspect-[4/5]">
        <img
          src={leader.photo}
          alt={leader.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <p className="text-xl text-black font-medium">{leader.name}</p>
        <p className="text-lg text-black font-normal mt-0.5">{leader.role}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <main
      className="min-h-screen bg-background"
      style={{ fontFamily: SF_PRO }}
    >
      <Navbar variant="solid" />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <Fade className="text-center">
            <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-4">Leadership</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black leading-tight">
              The people behind Renda.
            </h1>
          </Fade>

          <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-10 lg:gap-y-16">
            {leaders.map((leader) => (
              <Fade key={leader.name}>
                <LeaderCard leader={leader} />
              </Fade>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
