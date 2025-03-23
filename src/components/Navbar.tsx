
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAboutUs = () => {
    const footer = document.getElementById('about-us-section');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M12 6.667c-3.756 0-6.958 2.491-8 5.918.356 1.152 1.04 2.192 1.972 3.068.931.876 2.126 1.542 3.477 1.893C10.8 17.897 11.396 18 12 18c.604 0 1.199-.103 1.732-.257a10.591 10.591 0 0 0 2.324-1.332c1.507-1.201 2.646-2.876 3.108-4.826-1.042-3.427-4.244-5.918-8-5.918z" fill="#F5CF47" stroke="#4A2D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" fill="#4A2D00"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-skillbee-orange">Skill</span>
            <span className="text-skillbee-brown">Bee</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-skillbee-brown font-medium hover:text-skillbee-orange transition-colors">Log in</a>
          <a href="#" className="text-skillbee-brown font-medium hover:text-skillbee-orange transition-colors">English</a>
          <a href="#" className="text-skillbee-brown font-medium hover:text-skillbee-orange transition-colors">Profile</a>
          <a href="#" className="text-skillbee-brown font-medium hover:text-skillbee-orange transition-colors">Dashboard</a>
          <button 
            onClick={scrollToAboutUs}
            className="text-skillbee-brown font-medium hover:text-skillbee-orange transition-colors"
          >
            About Us
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" className="text-skillbee-brown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
