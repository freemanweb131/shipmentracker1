import { useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Circle,
  MapPin,
  Package,
  Truck,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Printer,
  Share2,
} from "lucide-react";
import { useState } from "react";

const VALID_TRACKING_NUMBER = "783011945627804";

const steps = [
  {
    id: 1,
    label: "Shipment information sent to FedEx",
    date: "Mar 18, 2026",
    time: "10:14 AM",
    location: "Online",
    done: true,
  },
  {
    id: 2,
    label: "Picked up",
    date: "Mar 18, 2026",
    time: "3:45 PM",
    location: "NEW ORLEANS, LA",
    done: true,
  },
  {
    id: 3,
    label: "In transit",
    date: "Mar 19, 2026",
    time: "8:22 AM",
    location: "MEMPHIS, TN",
    done: false,
    active: true,
  },
  {
    id: 4,
    label: "Out for delivery",
    date: "",
    time: "",
    location: "",
    done: false,
  },
  {
    id: 5,
    label: "Delivered",
    date: "",
    time: "",
    location: "",
    done: false,
  },
];

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-purple-100 text-[#4d148c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      <Truck size={13} />
      In Transit
    </span>
  );
}

function NotFoundState({ trackingNumber }: { trackingNumber: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tracking", href: "/" },
            { label: trackingNumber },
          ]}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle size={56} className="text-[#ff6200]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            No results found
          </h2>
          <p className="text-gray-600 mb-2 text-sm max-w-md mx-auto">
            We couldn't find any tracking information for:
          </p>
          <p className="font-mono font-bold text-gray-900 text-lg mb-6">{trackingNumber}</p>
          <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
            Please check that the tracking number is correct and try again.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#4d148c] hover:bg-[#3a0f6b] text-white font-bold text-sm px-8 py-3 transition-colors uppercase tracking-wider"
          >
            Try again
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function TrackingResult() {
  const params = useParams<{ trackingNumber: string }>();
  const trackingNumber = params.trackingNumber || "UNKNOWN";
  const [detailsOpen, setDetailsOpen] = useState(false);

  const isValid = trackingNumber.replace(/\s+/g, "") === VALID_TRACKING_NUMBER;

  if (!isValid) {
    return <NotFoundState trackingNumber={trackingNumber} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tracking", href: "/" },
            { label: trackingNumber },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Top actions */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tracking number</p>
              <h2 className="text-xl font-bold text-gray-900 font-mono">{trackingNumber}</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-sm hover:bg-gray-50 transition-colors">
                <Printer size={15} />
                Print
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-sm hover:bg-gray-50 transition-colors">
                <Share2 size={15} />
                Share
              </button>
            </div>
          </div>

          {/* Status card */}
          <div className="border border-gray-200 rounded-sm mb-6 overflow-hidden shadow-sm">
            {/* Purple header bar */}
            <div className="bg-[#4d148c] px-6 py-4 flex items-center justify-between flex-wrap gap-3">
              <div>
                <StatusBadge />
                <p className="text-white text-2xl font-bold mt-2">
                  Estimated delivery: Mar 22, 2026
                </p>
              </div>
              <div className="text-right">
                <p className="text-purple-200 text-xs uppercase tracking-wider mb-1">Delivering to</p>
                <p className="text-white font-semibold text-sm flex items-center gap-1 justify-end">
                  <MapPin size={13} />
                  Hattiesburg, MS 39406
                </p>
              </div>
            </div>

            {/* Progress timeline */}
            <div className="px-6 py-8">
              <div className="relative">
                {/* Connecting line */}
                <div
                  className="absolute top-3 left-3 h-full w-0.5 bg-gray-200"
                  style={{ height: `calc(100% - 24px)` }}
                />

                <ol className="space-y-6">
                  {steps.map((step, i) => (
                    <li key={step.id} className="flex items-start gap-4 relative">
                      {/* Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        {step.active ? (
                          <div className="w-6 h-6 rounded-full bg-[#4d148c] flex items-center justify-center">
                            <Truck size={13} className="text-white" />
                          </div>
                        ) : step.done ? (
                          <CheckCircle2 size={24} className="text-[#4d148c]" />
                        ) : (
                          <Circle size={24} className="text-gray-300" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 -mt-0.5">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <p
                              className={`text-sm font-semibold ${
                                step.active
                                  ? "text-[#4d148c]"
                                  : step.done
                                  ? "text-gray-900"
                                  : "text-gray-400"
                              }`}
                            >
                              {step.label}
                            </p>
                            {step.location && (
                              <p className="text-xs text-gray-500 mt-0.5">{step.location}</p>
                            )}
                          </div>
                          {step.date && (
                            <div className="text-right flex-shrink-0">
                              <p className="text-xs text-gray-500">{step.date}</p>
                              <p className="text-xs text-gray-400">{step.time}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Shipment details accordion */}
          <div className="border border-gray-200 rounded-sm mb-6 overflow-hidden shadow-sm">
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Package size={18} className="text-[#4d148c]" />
                <span className="font-semibold text-gray-900 text-sm">Shipment facts</span>
              </div>
              {detailsOpen ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </button>

            {detailsOpen && (
              <div className="border-t border-gray-200 px-6 py-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5">
                  {[
                    { label: "Tracking number", value: trackingNumber },
                    { label: "Service", value: "FedEx Ground" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-sm font-medium text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Receiver information */}
          <div className="border border-gray-200 rounded-sm mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
              <MapPin size={18} className="text-[#4d148c]" />
              <span className="font-semibold text-gray-900 text-sm">Receiver information</span>
            </div>
            <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Recipient</p>
                <p className="text-sm font-medium text-gray-900">Dwaine Braasch</p>
                <p className="text-sm text-gray-600">118 College Drive Box 4933</p>
                <p className="text-sm text-gray-600">Hattiesburg, MS 39406</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Sender</p>
                <p className="text-sm text-gray-600">New Orleans, LA US</p>
              </div>
            </div>
          </div>

          {/* Track another */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4d148c] hover:underline uppercase tracking-wider"
            >
              ← Track another shipment
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
