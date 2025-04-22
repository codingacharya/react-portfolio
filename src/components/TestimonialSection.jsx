import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Alice Johnson",
    text: "Amazing service! My website was delivered on time and exceeded my expectations.",
  },
  {
    name: "Mark Robinson",
    text: "Professional team with great communication. Highly recommend!",
  },
  {
    name: "Lisa Williams",
    text: "Beautiful design and flawless functionality. Loved working with them.",
  },
  {
    name: "James Anderson",
    text: "They really understand what a customer needs. 5-star service!",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl shadow text-center mx-2">
              <p className="text-lg italic text-gray-700 mb-4">"{testimonial.text}"</p>
              <h4 className="text-blue-600 font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
