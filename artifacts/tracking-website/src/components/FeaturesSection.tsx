const features = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    alt: "Person on motorbike receiving package",
    title: "Stay in control on the go",
    description:
      "With the FedEx Mobile app, shipment details are on tap. Track packages in real time, get delivery alerts, and update your preferences wherever you are.",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    alt: "Phone showing delivery tracking app",
    title: "See shipments in one spot",
    description:
      "Headed out of town for spring break? FedEx Delivery Manager® lets you keep an eye on your shipments, redirect them, and get picture proof of delivery.",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
    alt: "Family on a beach vacation",
    title: "Have packages held for free",
    description:
      "Request a vacation hold on deliveries for up to 14 days and pick them up when you're back. Simple, secure, and easy to set up ahead of time.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
          Clarity for every delivery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    target.parentElement!.style.height = "192px";
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
