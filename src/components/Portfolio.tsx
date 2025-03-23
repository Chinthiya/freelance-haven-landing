
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { 
    id: 1, 
    title: "Interior Design Website",
    category: "Web Design",
    image: "/lovable-uploads/7cd3d2b2-9fea-46b9-b5fc-9b92ae9b92dc.png",
    freelancer: "Emma Rodriguez",
    rating: 4.8
  },
  { 
    id: 2, 
    title: "Fashion E-commerce App",
    category: "UI/UX Design",
    image: "/lovable-uploads/c55d7b3a-c6d8-4ad9-938c-158f961398f9.png",
    freelancer: "David Chen",
    rating: 4.9
  },
  { 
    id: 3, 
    title: "Corporate Website Redesign",
    category: "Web Development",
    image: "/lovable-uploads/2dfbb247-3398-4432-a410-c50271c31a45.png",
    freelancer: "Sarah Johnson",
    rating: 4.7
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

  // Generate stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-skillbee-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-skillbee-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    return stars;
  };

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
              <motion.div
                className="flex flex-col space-y-2"
                key={portfolioItems[activeIndex].id + "-info"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-white/80">
                  {portfolioItems[activeIndex].category}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">
                    By {portfolioItems[activeIndex].freelancer}
                  </span>
                  <span className="mx-2 text-white/50">•</span>
                  <div className="flex items-center">
                    {renderStars(portfolioItems[activeIndex].rating)}
                    <span className="ml-2 text-white/90">
                      {portfolioItems[activeIndex].rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
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
