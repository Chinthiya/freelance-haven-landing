
import { motion } from "framer-motion";

const categories = [
  { name: "Graphics and design", id: "graphics" },
  { name: "Video and animation", id: "video" },
  { name: "SEO", id: "seo" },
  { name: "Programming and Tech", id: "programming" },
  { name: "Writing and Translation", id: "writing" },
  { name: "Voice over", id: "voice" },
  { name: "Social marketing", id: "social" },
  { name: "Music and audio", id: "music" },
  { name: "Data Analyst", id: "data" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-skillbee-brown text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Browse popular categories
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="bg-skillbee-cream rounded-xl p-6 hover-lift cursor-pointer"
            >
              <h3 className="text-xl font-medium text-skillbee-brown">{category.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
