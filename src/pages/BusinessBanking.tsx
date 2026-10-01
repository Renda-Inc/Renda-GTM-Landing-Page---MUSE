import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollHero from "@/components/business/ScrollHero";
import ConnectedSystem from "@/components/business/ConnectedSystem";
import EarlyAccessForm from "@/components/business/EarlyAccessForm";
import { Fade, Divider, Eyebrow, H2 } from "@/components/business/BusinessUI";
import { SF_FONT } from "@/lib/typography";
import businessAlfie from "@/assets/business-alfie.jpg";
import businessAccess from "@/assets/business-access.jpg";
import businessVision from "@/assets/business-vision.jpg";
import businessDashboard from "@/assets/business-dashboard.jpg";

export default function BusinessBanking() {
  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_FONT }}>
      <Navbar />

      {/* ── 1. One continuous, scroll-driven hero ── */}
      <ScrollHero />

      {/* ── 2. The vision ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Eyebrow>The vision</Eyebrow>
              <H2>Your business, in one financial system.</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Running a business means holding the whole financial picture in your head; money coming in, money going out, what's owed, and what's next. Renda brings that entire side of your business into one connected experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={businessVision}
                alt="A business owner reviewing financials"
                className="w-full h-[312px] lg:h-[468px] object-cover"
                loading="lazy"
                width={1440}
                height={1088}
              />
            </div>
          </div>
        </Fade>
      </section>

      {/* ── 3. A smarter financial operating system ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <H2>A smarter financial operating system for your business.</H2>
            <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
              Banking and financial operations come together in one intelligent platform, with Alfie connecting the numbers, activity, and decisions behind your business.
            </p>
          </div>
          <div className="mt-12 rounded-2xl overflow-hidden">
            <img
              src={businessDashboard}
              alt="Renda Business dashboard showing accounts, spend, and tax estimates"
              className="w-full h-[320px] lg:h-[520px] object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </Fade>
      </section>

      {/* ── 3. One connected system ── */}
      <ConnectedSystem />

      {/* ── 4. Powered by Alfie ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-last lg:order-first rounded-2xl overflow-hidden">
              <img
                src={businessAlfie}
                alt="A business owner reviewing performance late in the evening"
                className="w-full h-[320px] lg:h-[440px] object-cover"
                loading="lazy"
                width={1440}
                height={1088}
              />
            </div>
            <div>
              <Eyebrow>Powered by Alfie</Eyebrow>
              <H2>Intelligence across your business finances.</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Alfie doesn't just display business transactions. It reads and connects the financial activities happening across your business and reveals what's happening, what's changing, and what needs your attention.
              </p>
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── 5. Early business access ── */}
      <section id="business-early-access" className="scroll-mt-24 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Eyebrow>Early access</Eyebrow>
              <H2>Be among the first businesses on Renda.</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Renda Business is coming soon. Join the early access list to be considered for the
                first group of businesses invited onto the platform, and help shape it as we build.
              </p>
              <div className="mt-10 rounded-2xl overflow-hidden">
                <img
                  src={businessAccess}
                  alt="A small team welcoming a new partner"
                  className="w-full h-[240px] lg:h-[300px] object-cover"
                  loading="lazy"
                  width={1440}
                  height={1088}
                />
              </div>
            </div>
            <EarlyAccessForm />
          </div>
        </Fade>
      </section>

      {/* ── 6. Final CTA (flows into footer) ── */}
      <section className="pt-20 lg:pt-28 pb-20 lg:pb-24 bg-[#111111]">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <H2 light>The next generation of business banking is coming.</H2>
          <p className="mt-6 text-base md:text-lg text-white/70 font-medium leading-relaxed">
            Put your business at the front of the line.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#business-early-access"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white text-[#111111] text-base font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Join the early access list
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
