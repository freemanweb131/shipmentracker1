import { Globe, Package, Truck, TriangleAlert, Home, ArrowRight } from "lucide-react";

const links = [
  { icon: <Globe size={28} />, label: "International Shipping" },
  { icon: <Package size={28} />, label: "Packaging & Supplies" },
  { icon: <Truck size={28} />, label: "Schedule a Pickup" },
  { icon: <TriangleAlert size={28} />, label: "Service Alerts" },
  { icon: <Home size={28} />, label: "Delivery Manager" },
];

export default function QuickLinks() {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto gap-4 pb-2">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex flex-col items-center gap-2 text-center min-w-[100px] text-[#4d148c] hover:text-[#6a1fc2] transition-colors group"
            >
              <div className="p-3 rounded-full border-2 border-[#4d148c] group-hover:bg-purple-50 transition-colors">
                {link.icon}
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-[#4d148c]">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
