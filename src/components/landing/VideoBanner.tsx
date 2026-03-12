import lifestyleVideo from "@/assets/lifestyle-banner-video.mp4";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={lifestyleVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/20" />
    </section>
  );
}
