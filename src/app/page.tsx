import BlogSection from "@/components/blog-section/BlogSection";
import ChooseSection from "@/components/choose/ChooseSection";
import HeroSection from "@/components/hero/HeroSection";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ProjectSection from "@/components/project-section/ProjectSection";
import ServicesSection from "@/components/services/ServicesSection";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroSection />
      <ServicesSection />
      <ChooseSection />
      <ProjectSection />
      <NewsLetter />
      <BlogSection />
    </section>
  );
};

export default HomePage;
