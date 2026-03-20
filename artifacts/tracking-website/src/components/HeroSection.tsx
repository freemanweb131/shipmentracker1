import { useState } from "react";
import { Package, MapPin, ArrowRight, Search } from "lucide-react";
import heroBg from "@assets/image_1774043522410.png";

type Tab = "rate-ship" | "track" | "locations";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<Tab>("track");
  const [trackingId, setTrackingId] = useState("");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "rate-ship", label: "RATE & SHIP", icon: <Package size={24} /> },
    { id: "track", label: "TRACK", icon: <Search size={24} /> },
    { id: "locations", label: "LOCATIONS", icon: <MapPin size={24} /> },
  ];

  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      {/* Real background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Dark overlay to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16" style={{ zIndex: 2 }}>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight drop-shadow-lg">
            Ship, manage, track, deliver
          </h1>

          {/* Tab Widget */}
          <div className="inline-flex shadow-xl mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-2 px-8 py-4 text-xs font-bold tracking-wider transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#4d148c] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className={activeTab === tab.id ? "text-white" : "text-gray-600"}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tracking Input */}
          <div className="flex shadow-xl">
            <input
              type="text"
              placeholder="TRACKING ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 px-5 py-4 text-sm text-gray-800 bg-white border-0 outline-none placeholder:text-gray-400 placeholder:tracking-widest placeholder:text-xs min-w-0"
            />
            <button className="bg-[#ff6200] hover:bg-[#e55a00] text-white px-8 py-4 font-bold text-sm tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap">
              TRACK
              <ArrowRight size={16} />
            </button>
          </div>

          {activeTab === "rate-ship" && (
            <div className="mt-2 text-white/80 text-sm">Enter your shipment details to get a rate</div>
          )}
          {activeTab === "locations" && (
            <div className="mt-2 text-white/80 text-sm">Find a FedEx location near you</div>
          )}
        </div>
      </div>
    </section>
  );
}
