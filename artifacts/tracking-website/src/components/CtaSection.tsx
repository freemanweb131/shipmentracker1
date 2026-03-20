import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text side */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ship it your way with FedEx One Rate
            </h2>
            <p className="text-gray-600 mb-3">
              Forget about package weight and dimensions. With FedEx One Rate, you get simple, flat-rate pricing for small packages.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              **Exclusions apply. Visit the{" "}
              <a href="#" className="text-[#4d148c] underline hover:text-purple-800">
                FedEx One Rate
              </a>{" "}
              page to learn more.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-[#ff6200] text-[#ff6200] hover:bg-[#ff6200] hover:text-white px-8 py-3 font-bold text-sm tracking-wider transition-colors"
            >
              START SHIPPING NOW
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Image side - placeholder with gradient */}
          <div className="flex-1 w-full">
            <div
              className="w-full h-64 md:h-72 rounded-sm"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-white text-center px-6">
                <div className="text-6xl mb-3">📦</div>
                <p className="text-xl font-bold">Fast &amp; Reliable Delivery</p>
                <p className="text-purple-200 text-sm mt-1">Nationwide Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
