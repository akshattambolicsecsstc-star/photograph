import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Photography ${i + 1}`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 1 ? images.length : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length ? 1 : selectedImage + 1);
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Explore my latest work and creative portfolio
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-lg bg-gray-100 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-400 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{image.title}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Scale Effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:scale-110 transition-transform duration-500 origin-center -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Image Container */}
          <div className="w-full max-w-5xl max-h-[85vh] flex items-center justify-center">
            <div className="aspect-square w-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg font-medium">Photography {selectedImage}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium">
            {selectedImage} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
