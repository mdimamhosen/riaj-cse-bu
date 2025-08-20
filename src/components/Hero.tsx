import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/bu_pic.jpg",
    title: "Share your commencement memories!",
    subtitle: "Share your photos from commencement with us, and help celebrate the experience!",
    button: "Submit your photos here",
  },
  {
    image: "/Barishal_University (1).jpg",
    title: "Welcome to University of Barishal",
    subtitle: "Shaping the future through innovation and knowledge",
    button: "Explore More",
  },
  {
    image: "/bu2_pic.jpg",
    title: "Research & Innovation",
    subtitle: "Driving impactful solutions through cutting-edge research",
    button: "Learn More",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt="Banner"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-white p-6 rounded-lg max-w-3xl text-center shadow-lg z-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{slides[index].title}</h2>
        <p className="mb-4">{slides[index].subtitle}</p>
        <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
          {slides[index].button}
        </button>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-800/70 hover:bg-blue-900 text-white p-3 rounded-full z-30"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-800/70 hover:bg-blue-900 text-white p-3 rounded-full z-30"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
