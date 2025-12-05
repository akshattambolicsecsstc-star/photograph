export default function About() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait Image Placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-400 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Portrait Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate photographer dedicated to capturing moments that tell stories. With a keen eye for composition and light, I specialize in creating images that resonate emotionally with viewers.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My approach combines technical expertise with artistic vision. I believe photography is about more than just taking pictures—it's about preserving emotions, memories, and the beauty of human connection.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether it's weddings, portraits, or commercial work, I bring professionalism, creativity, and dedication to every project. Let's create something beautiful together.
            </p>
            <button className="px-10 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
