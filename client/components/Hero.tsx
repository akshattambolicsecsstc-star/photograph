export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-black/60">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22%23444%22/></svg>')] opacity-10"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Your Name
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-8">
          Photography
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Short tagline about your photography style and creative vision
        </p>
        <button className="px-10 py-4 bg-accent hover:bg-opacity-90 text-primary font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 text-lg">
          View Portfolio
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
