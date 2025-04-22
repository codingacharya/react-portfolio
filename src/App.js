import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";

import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}


export default App;
