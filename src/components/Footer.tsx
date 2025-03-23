
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-skillbee-brown text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 6.667c-3.756 0-6.958 2.491-8 5.918.356 1.152 1.04 2.192 1.972 3.068.931.876 2.126 1.542 3.477 1.893C10.8 17.897 11.396 18 12 18c.604 0 1.199-.103 1.732-.257a10.591 10.591 0 0 0 2.324-1.332c1.507-1.201 2.646-2.876 3.108-4.826-1.042-3.427-4.244-5.918-8-5.918z" fill="#F5CF47" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-skillbee-yellow">Skill</span>
                <span className="text-white">Bee</span>
              </h3>
            </div>
            <p className="text-white/70">
              The premier platform connecting talented freelancers with clients worldwide.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Graphics & Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Programming & Tech</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Writing & Translation</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Video & Animation</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Press & News</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Help & Support</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Community Standards</a></li>
              <li><a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2023 SkillBee. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-skillbee-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
