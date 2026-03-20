import { Headphones, Package } from "lucide-react";

const resources = [
  {
    icon: <Headphones size={56} strokeWidth={1.2} className="text-[#4d148c]" />,
    title: "Access self-service support tools",
    description:
      "You can also browse help videos or contact our customer support team.",
    cta: "GET SUPPORT",
    href: "#",
  },
  {
    icon: <Package size={56} strokeWidth={1.2} className="text-[#4d148c]" />,
    title: "Get answers to tracking questions",
    description:
      "Find answers to common questions in one convenient spot. And get the info you need fast.",
    cta: "GO TO TRACKING FAQS",
    href: "#",
  },
];

export default function HelpSection() {
  return (
    <section className="py-16 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-14">
          Need additional help? Explore these resources.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {resources.map((r) => (
            <div key={r.title} className="flex flex-col items-center text-center">
              <div className="mb-5">{r.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{r.title}</h3>
              <p className="text-sm text-gray-600 mb-5 max-w-xs">{r.description}</p>
              <a
                href={r.href}
                className="text-sm font-bold text-[#4d148c] hover:underline tracking-wider uppercase"
              >
                {r.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
