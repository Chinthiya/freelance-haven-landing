
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "SkillBee - Find the Perfect Freelance Talent";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <Stats />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
