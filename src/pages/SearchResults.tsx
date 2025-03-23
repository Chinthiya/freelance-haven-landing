
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Search, Star, Filter, X } from 'lucide-react';

// Sample data for search results
const sampleFreelancers = [
  { 
    id: 1, 
    name: "John Doe", 
    skill: "Web Developer", 
    rating: 4.8, 
    hourlyRate: "$45", 
    description: "Experienced web developer specializing in React and Node.js applications.",
    image: "https://randomuser.me/api/portraits/men/1.jpg" 
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    skill: "Graphic Designer", 
    rating: 4.9, 
    hourlyRate: "$50", 
    description: "Creative graphic designer with a passion for branding and visual identity.",
    image: "https://randomuser.me/api/portraits/women/2.jpg" 
  },
  { 
    id: 3, 
    name: "Alex Johnson", 
    skill: "Content Writer", 
    rating: 4.7, 
    hourlyRate: "$35", 
    description: "Professional content writer who specializes in SEO-friendly blog posts.",
    image: "https://randomuser.me/api/portraits/men/3.jpg" 
  },
  { 
    id: 4, 
    name: "Emily Wilson", 
    skill: "UI/UX Designer", 
    rating: 4.9, 
    hourlyRate: "$55", 
    description: "UI/UX designer focused on creating intuitive and engaging digital experiences.",
    image: "https://randomuser.me/api/portraits/women/4.jpg" 
  },
  { 
    id: 5, 
    name: "Michael Brown", 
    skill: "Video Editor", 
    rating: 4.6, 
    hourlyRate: "$40", 
    description: "Professional video editor with experience in various editing software tools.",
    image: "https://randomuser.me/api/portraits/men/5.jpg" 
  },
  { 
    id: 6, 
    name: "Sara Lee", 
    skill: "Social Media Manager", 
    rating: 4.8, 
    hourlyRate: "$38", 
    description: "Social media expert who drives engagement and builds online presence.",
    image: "https://randomuser.me/api/portraits/women/6.jpg" 
  },
];

// Skill filters
const skillFilters = ["Web Development", "Design", "Writing", "Marketing", "Video", "All Skills"];

const SearchResults = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(sampleFreelancers);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 4;
  
  // Extract search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || "";
    setSearchTerm(query);
    
    // Filter results based on query
    if (query) {
      const filtered = sampleFreelancers.filter(
        freelancer => 
          freelancer.name.toLowerCase().includes(query.toLowerCase()) || 
          freelancer.skill.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(sampleFreelancers);
    }
  }, [location.search]);
  
  // Handle filter selection
  const toggleFilter = (filter: string) => {
    if (filter === "All Skills") {
      setSelectedFilters([]);
      setResults(sampleFreelancers);
      return;
    }
    
    if (selectedFilters.includes(filter)) {
      const newFilters = selectedFilters.filter(f => f !== filter);
      setSelectedFilters(newFilters);
      
      // Apply remaining filters
      if (newFilters.length === 0) {
        setResults(sampleFreelancers);
      }
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  
  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setResults(sampleFreelancers);
      return;
    }
    
    const filtered = sampleFreelancers.filter(
      freelancer => 
        freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        freelancer.skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };
  
  // Calculate pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(results.length / resultsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i <= rating ? "text-skillbee-orange fill-skillbee-orange" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Search Header */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search for skills or freelancers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-2 border-skillbee-cream focus:border-skillbee-orange"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <Button type="submit" className="bg-skillbee-orange hover:bg-skillbee-orange/90 text-white">
                Search
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 h-fit">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-skillbee-brown flex items-center">
                  <Filter size={18} className="mr-2" /> Filters
                </h3>
                {selectedFilters.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      setSelectedFilters([]);
                      setResults(sampleFreelancers);
                    }}
                    className="text-sm text-gray-500 hover:text-skillbee-orange"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skillFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant={selectedFilters.includes(filter) ? "default" : "outline"}
                      size="sm"
                      className={selectedFilters.includes(filter) 
                        ? "bg-skillbee-orange text-white hover:bg-skillbee-orange/90" 
                        : "text-gray-700 hover:bg-skillbee-cream/50"}
                      onClick={() => toggleFilter(filter)}
                    >
                      {filter}
                      {selectedFilters.includes(filter) && (
                        <X size={14} className="ml-1" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="w-full md:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-skillbee-brown">
                  {results.length} freelancers found
                </h2>
                <div className="text-sm text-gray-500">
                  Showing {indexOfFirstResult + 1}-{Math.min(indexOfLastResult, results.length)} of {results.length}
                </div>
              </div>
              
              {/* Results List */}
              <div className="space-y-4">
                {currentResults.length > 0 ? (
                  currentResults.map((freelancer) => (
                    <motion.div
                      key={freelancer.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex justify-center md:justify-start">
                          <img 
                            src={freelancer.image} 
                            alt={freelancer.name} 
                            className="w-24 h-24 rounded-full object-cover border-2 border-skillbee-cream"
                          />
                        </div>
                        <div className="md:w-3/4 p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-skillbee-brown">{freelancer.name}</h3>
                            <span className="text-skillbee-orange font-bold">{freelancer.hourlyRate}/hr</span>
                          </div>
                          <div className="text-sm text-gray-500 mb-2">{freelancer.skill}</div>
                          <div className="flex items-center mb-3">
                            {renderStars(freelancer.rating)}
                            <span className="ml-2 text-sm text-gray-500">{freelancer.rating}</span>
                          </div>
                          <p className="text-gray-700 mb-4">{freelancer.description}</p>
                          <div className="flex justify-end">
                            <Button className="bg-skillbee-orange hover:bg-skillbee-orange/90 text-white">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-medium text-gray-500">No results found</h3>
                    <p className="text-gray-400 mt-2">Try different search terms or filters</p>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {results.length > resultsPerPage && (
                <Pagination className="mt-6">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink 
                          isActive={page === currentPage}
                          onClick={() => paginate(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => paginate(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
