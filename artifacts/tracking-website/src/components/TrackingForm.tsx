import { useState } from "react";
import { useLocation } from "wouter";

type TrackTab = "number" | "reference" | "tcn" | "proof";

const tabs: { id: TrackTab; label: string }[] = [
  { id: "number", label: "Tracking number" },
  { id: "reference", label: "Track by reference" },
];

const tabHelp: Record<TrackTab, string> = {
  number:
    "Enter your reference tracking number below. This tracking system is only for sensitive items. If you are tracking a regular shipment, please use the standard tracking page.",
  reference:
    "Enter your reference tracking number below. This tracking system is only for sensitive items. If you are tracking a regular shipment, please use the standard tracking page.",
  tcn: "",
  proof: "",
};

const tabLabel: Record<TrackTab, string> = {
  number: "Tracking number",
  reference: "Tracking number",
  tcn: "TCN number",
  proof: "Tracking number",
};

export default function TrackingForm() {
  const [activeTab, setActiveTab] = useState<TrackTab>("number");
  const [value, setValue] = useState("");
  const [, navigate] = useLocation();

  function handleTrack() {
    const trimmed = value.trim();
    if (!trimmed) return;
    const firstNumber = trimmed.split("\n")[0].trim().replace(/\s+/g, "");
    navigate(`/track/${encodeURIComponent(firstNumber)}`);
  }

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto w-full">
      <h1 className="text-4xl font-light text-gray-900 text-center mb-8">
        Track your FedEx<sup className="text-2xl">®</sup> shipments
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap border border-gray-300 mb-6 overflow-hidden rounded-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-fit px-5 py-3 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-[#4d148c] text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Help text */}
      <p className="text-sm text-gray-600 text-center mb-6">{tabHelp[activeTab]}</p>

      {/* Input */}
      <div className="mb-3">
        <label className="block text-sm text-gray-700 mb-1">
          {tabLabel[activeTab]}<span className="text-gray-500">*</span>
        </label>
        <textarea
          rows={3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-400 px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#4d148c] focus:ring-1 focus:ring-[#4d148c] resize-none"
          placeholder=""
        />
      </div>

      {/* Track button */}
      <div className="flex justify-center">
        <button
          onClick={handleTrack}
          className="px-16 py-3 border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm tracking-widest uppercase transition-colors"
        >
          Track
        </button>
      </div>
    </section>
  );
}
