const services = [
  {
    id: 1,
    title: "Weddings",
    description: "Capture the most important moments of your special day with artistic vision and technical excellence. From ceremony to celebration, every emotion preserved beautifully.",
    icon: "💍",
  },
  {
    id: 2,
    title: "Portraits",
    description: "Professional portrait photography that reveals personality and character. Perfect for personal branding, families, or artistic expression with timeless elegance.",
    icon: "👤",
  },
  {
    id: 3,
    title: "Product Shoots",
    description: "Showcase your products with stunning photography that highlights features and quality. Ideal for e-commerce, marketing, and promotional campaigns.",
    icon: "📦",
  },
  {
    id: 4,
    title: "Commercial",
    description: "Professional commercial photography for brands and businesses. From corporate events to brand storytelling, creating visual content that resonates.",
    icon: "🎬",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Services
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Comprehensive photography solutions tailored to your needs
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Placeholder */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow Indicator */}
              <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-medium">Learn more</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
