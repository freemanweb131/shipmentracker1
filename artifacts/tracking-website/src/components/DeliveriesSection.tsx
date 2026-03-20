const cards = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=260&fit=crop",
    alt: "Person checking phone for deliveries",
  },
  {
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=260&fit=crop",
    alt: "Woman smiling with phone",
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=260&fit=crop",
    alt: "Person working at home",
  },
];

export default function DeliveriesSection() {
  return (
    <section className="py-14 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-10">
          Take control of your deliveries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                  t.parentElement!.style.background =
                    "linear-gradient(135deg, #6b4db5 0%, #4d148c 100%)";
                  t.parentElement!.style.height = "192px";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
