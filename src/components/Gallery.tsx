import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images =
    lang === "de"
      ? [
          { src: "/images/img-1.jpg", alt: "Bar-Theke" },
          { src: "/images/img-2.jpg", alt: "Sonnenuntergang Lounge" },
          { src: "/images/img-3.jpg", alt: "Restaurant mit Aussicht" },
          { src: "/images/img-4.jpg", alt: "Cocktail Bar" },
          { src: "/images/img-5.jpg", alt: "Weinkollektion" },
          { src: "/images/img-6.jpg", alt: "Elegantes Interieur" },
          { src: "/images/img-7.jpg", alt: "Terrasse Sunset" },
          { src: "/images/img-8.jpg", alt: "Restaurant Ambiente" },
        ]
      : [
          { src: "/images/img-1.jpg", alt: "Bar Counter" },
          { src: "/images/img-2.jpg", alt: "Sunset Lounge" },
          { src: "/images/img-3.jpg", alt: "Restaurant View" },
          { src: "/images/img-4.jpg", alt: "Cocktail Bar" },
          { src: "/images/img-5.jpg", alt: "Wine Collection" },
          { src: "/images/img-6.jpg", alt: "Elegant Interior" },
          { src: "/images/img-7.jpg", alt: "Terrace Sunset" },
          { src: "/images/img-8.jpg", alt: "Restaurant Ambience" },
        ];

  const { t } = useLanguage();

  return (
    <section id="galerie" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.gallery.title}</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">{t.gallery.description}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={() =>
                  setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() =>
                  setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <p className="text-center text-white/80 mt-4 text-sm">
                {selectedIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
