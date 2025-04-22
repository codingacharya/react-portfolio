import React from "react";
import heroImage from "../assets/hero.jpg"; // adjust path as needed

const HeroSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-gray-600 mb-6">This is your local image hero section.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
