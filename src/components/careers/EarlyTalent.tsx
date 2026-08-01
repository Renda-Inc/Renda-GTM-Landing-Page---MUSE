import { useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import earlyTalentImg from "@/assets/careers/early-talent.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function EarlyTalent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Application received!", description: "We'll review your submission and get back to you soon." });
    }, 1200);
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — Info + Image */}
          <Fade>
            <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">Early Talent</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
              Start building early.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-black/60 font-medium leading-relaxed">
              <p>
                We welcome interns, co-ops, and early-career builders who want to do meaningful work from day one. At Renda, junior doesn't mean sidelined; it means mentored, challenged, and trusted.
              </p>
              <p>
                If you're a student or recent graduate with a passion for finance, AI, or product design, we'd love to hear from you.
              </p>
            </div>
            <div className="mt-10 rounded-2xl overflow-hidden">
              <img src={earlyTalentImg} alt="Mentor and intern working together" className="w-full h-[420px] lg:h-[500px] object-cover" loading="lazy" width={1280} height={720} />
            </div>
          </Fade>

          {/* Right — Application form */}
          <Fade>
            <div className="bg-[#F6F5F2] rounded-2xl p-8 border border-transparent sticky top-32">
              <h3 className="text-xl font-semibold text-foreground mb-2">Send us your resume</h3>
              <p className="text-sm text-black/60 font-medium mb-8">
                Tell us about yourself and we'll be in touch if there's a fit.
              </p>


              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Thanks for applying!</h4>
                  <p className="text-sm text-muted-foreground">We'll review your submission and reach out if there's a match.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name *</Label>
                      <Input id="firstName" required placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name *</Label>
                      <Input id="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="jane@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school">School / University</Label>
                    <Input id="school" placeholder="University of Toronto" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of interest</Label>
                    <Input id="interest" placeholder="e.g. Engineering, Product Design, Data" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn or portfolio URL</Label>
                    <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about yourself</Label>
                    <Textarea id="message" rows={4} placeholder="What are you passionate about? What do you want to build?" />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Or email us directly at{" "}
                    <a href="mailto:careers@renda.com" className="text-primary hover:underline">
                      careers@renda.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
