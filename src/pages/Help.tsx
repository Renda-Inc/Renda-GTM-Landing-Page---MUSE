import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ChevronRight } from "lucide-react";
import { helpCategories } from "@/data/help";
import helpHeroBg from "@/assets/help-hero-bg.jpeg";

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

function Divider() {
  return <div className="max-w-4xl mx-auto px-6"><div className="h-[2px] bg-black/15 rounded-full" /></div>;
}

export default function Help() {
  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${helpHeroBg})` }}
      >
        <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
        <Fade className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-6">Help Centre</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80">
            How can we help you?
          </h1>
          <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions, explore topic guides, and get the support you need.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* Topic Cards — Working at Renda style */}
      <section className="py-24 lg:py-32 bg-[#F6F5F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpCategories.map((cat) => {
              const Icon = cat.icon;
              const previewTopics = cat.topics.slice(0, 3);
              return (
                <Fade key={cat.slug}>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h2>
                    <p className="text-[16px] text-black font-medium leading-relaxed">{cat.description}</p>

                    <ul className="mt-5 space-y-2 flex-1">
                      {previewTopics.map((t) => (
                        <li key={t.title} className="text-[15px] text-black/70 font-medium flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {t.title}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/help/${cat.slug}`}
                      className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-foreground hover:opacity-70 transition-opacity"
                    >
                      See all {cat.topics.length} articles
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* Contact section */}
      <section id="contact" className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-8">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
            Still need help?
          </h2>
          <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed max-w-xl mx-auto">
            Our support team is available Monday to Friday, 9 AM to 6 PM ET. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:support@renda.com"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
          >
            Email Support
          </a>
        </Fade>
      </section>

      <Divider />

      {/* Refer a Friend */}
      <section id="refer" className="py-24 lg:py-32 bg-[#F6F5F2]">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-8">Refer a Friend</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
            Share Renda. Earn rewards.
          </h2>
          <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed max-w-xl mx-auto">
            Invite friends to Renda and you'll both receive a bonus when they open and fund their account. The more you share, the more you earn.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
          >
            Get Your Referral Link
          </a>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
