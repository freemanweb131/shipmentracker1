import heroBg from "@assets/image_1774043522410.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex" style={{ height: "460px" }}>
      {/* Left panel — solid colour that will hold your new branding/tracking widget */}
      <div className="flex-shrink-0 bg-[#4d148c] z-10" style={{ width: "62%" }} />

      {/* Right panel — zoomed & cropped to show only the person, no baked-in text */}
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "530%",
          backgroundPosition: "91% 12%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
}
