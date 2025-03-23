
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";

const freelancers = [
  { id: 1, name: "John Doe", skill: "Web Developer" },
  { id: 2, name: "Jane Smith", skill: "Graphic Designer" },
  { id: 3, name: "Alex Johnson", skill: "Content Writer" },
  { id: 4, name: "Emily Wilson", skill: "UI/UX Designer" },
  { id: 5, name: "Michael Brown", skill: "Video Editor" },
];

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const filteredFreelancers = freelancers.filter(
    (freelancer) => 
      freelancer.name.toLowerCase().includes(searchValue.toLowerCase()) || 
      freelancer.skill.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    if (searchValue.length > 0) {
      setShowDropdown(true);
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    // Delayed hiding of dropdown to allow clicking on options
    setTimeout(() => setShowDropdown(false), 200);
  };
  
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
          placeholder="Search for skills, services or freelancers..."
          className="w-full px-6 py-4 bg-transparent outline-none text-skillbee-brown placeholder-gray-400"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="absolute right-2 bg-skillbee-yellow hover:bg-skillbee-orange text-skillbee-brown p-3 rounded-full transition-colors duration-300 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </div>
      
      {showDropdown && (
        <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
          {filteredFreelancers.length > 0 ? (
            <ul className="py-2">
              {filteredFreelancers.map((freelancer) => (
                <li key={freelancer.id} className="px-6 py-3 hover:bg-skillbee-cream cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium text-skillbee-brown">{freelancer.name}</span>
                    <span className="text-sm text-gray-500">{freelancer.skill}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-4 text-center text-gray-500">
              No freelancers found
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SearchBar;
