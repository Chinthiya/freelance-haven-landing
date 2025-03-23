
import { useState } from 'react';
import { motion } from 'framer-motion';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <motion.div 
      className="relative w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className={`relative flex items-center bg-white border-2 rounded-full overflow-hidden transition-all duration-300 ${
        isFocused ? 'shadow-lg border-skillbee-orange' : 'shadow-md border-transparent'
      }`}>
        <input
          type="text"
          placeholder="Search for skills, services or domains..."
          className="w-full px-6 py-4 bg-transparent outline-none text-skillbee-brown placeholder-gray-400"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className="absolute right-2 bg-skillbee-yellow hover:bg-skillbee-orange text-skillbee-brown p-3 rounded-full transition-colors duration-300 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
