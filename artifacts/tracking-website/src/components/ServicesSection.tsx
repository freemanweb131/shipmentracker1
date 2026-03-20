import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Business Solutions",
    description: "Streamline your shipping, save money, and grow your business with FedEx services tailored for you.",
    cta: "Explore Business Solutions",
    accent: "bg-[#4d148c]",
  },
  {
    title: "FedEx Rewards",
    description: "Earn rewards on qualifying shipments and redeem them for gift cards, account credits, and more.",
    cta: "Learn About Rewards",
    accent: "bg-[#ff6200]",
  },
  {
    title: "Money-Back Guarantee",
    description: "We offer a money-back guarantee for select services. Terms and conditions apply.",
    cta: "See Guarantee Details",
    accent: "bg-[#4d148c]",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 p-8 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-1 ${service.accent} mb-6`} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{service.description}</p>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-semibold text-[#4d148c] hover:text-purple-800 transition-colors group"
              >
                {service.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer text */}
        <div className="mt-12 text-sm text-gray-500 space-y-2 border-t border-gray-200 pt-8">
          <p>
            We offer a money-back guarantee for select services. This guarantee may be suspended, modified, or revoked.
            Please check{" "}
            <a href="#" className="text-[#4d148c] underline hover:text-purple-800">
              money-back guarantee
            </a>{" "}
            for the latest status of our money-back guarantee.
          </p>
          <p>
            *Finding in the{" "}
            <a href="#" className="text-[#4d148c] underline hover:text-purple-800">
              FedEx 2025 Returns Survey
            </a>
            .
          </p>
          <p>
            **For details, please see{" "}
            <a href="#" className="text-[#4d148c] underline hover:text-purple-800">
              FedEx Rewards Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
