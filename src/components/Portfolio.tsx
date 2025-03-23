
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { 
    id: 1, 
    title: "Interior Design",
    category: "Design",
    image: "/lovable-uploads/7cd3d2b2-9fea-46b9-b5fc-9b92ae9b92dc.png"
  },
  { 
    id: 2, 
    title: "Fashion Illustration",
    category: "Art & Design",
    image: "/lovable-uploads/c55d7b3a-c6d8-4ad9-938c-158f961398f9.png"
  },
  { 
    id: 3, 
    title: "Website Design",
    category: "Web Development",
    image: "/lovable-uploads/2dfbb247-3398-4432-a410-c50271c31a45.png"
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<null | number>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startInterval();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-skillbee-brown text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our best works:
        </motion.h2>
        
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9] bg-skillbee-cream rounded-2xl overflow-hidden">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
              />
            ))}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                key={portfolioItems[activeIndex].id + "-title"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {portfolioItems[activeIndex].title}
              </motion.h3>
              <motion.p 
                className="text-white/80"
                key={portfolioItems[activeIndex].id + "-category"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {portfolioItems[activeIndex].category}
              </motion.p>
            </div>
          </div>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full text-white shadow-md transition-all duration-200"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full text-white shadow-md transition-all duration-200"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-skillbee-orange scale-110" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
