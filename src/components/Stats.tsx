
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="py-16 bg-skillbee-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.h3 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-skillbee-brown"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                50K+
              </motion.h3>
              <p className="text-xl text-skillbee-brown/80">Skilled professionals</p>
            </div>
            
            <div className="space-y-2">
              <motion.div
                className="flex items-center justify-center space-x-2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-skillbee-brown">4.7/5</h3>
                <svg className="w-8 h-8 text-skillbee-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </motion.div>
              <p className="text-xl text-skillbee-brown/80">Client satisfaction rate</p>
            </div>
            
            <div className="space-y-2">
              <motion.div
                className="flex items-center justify-center space-x-2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-skillbee-brown">50+</h3>
                <svg className="w-8 h-8 text-skillbee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"></path>
                </svg>
              </motion.div>
              <p className="text-xl text-skillbee-brown/80">Freelancers from around globe</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
