
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-skillbee-yellow min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2dfbb247-3398-4432-a410-c50271c31a45.png')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl text-skillbee-brown font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Find the perfect freelance talent<br />for your projects
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-skillbee-brown/80 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Connect with skilled professionals from around the world. Get quality work done quickly and efficiently.
          </motion.p>
          
          <SearchBar />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
