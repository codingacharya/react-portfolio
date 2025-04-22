import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites tailored to your needs.",
  },
  {
    title: "UI/UX Design",
    description: "Crafting user-friendly interfaces and seamless experiences.",
  },
  {
    title: "SEO Optimization",
    description: "Helping your site rank higher and reach more people.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
