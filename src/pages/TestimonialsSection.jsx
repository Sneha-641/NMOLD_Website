import React from 'react';
import Image1 from  '../assets/Image1.png';
import '../styles/TestionialsSection.css'; // Import a CSS file for styling


function TestimonialsSection() {
  const testimonials = [
    {
      image: Image1,
      name: 'Savannah Nguyen',
      role: 'Customer',
      text: 'As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.'
    },
    {
      image: Image1,
      name: 'Savannah Nguyen',
      role: 'Customer',
      text: 'As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.'
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white custom-shadow custom-box1 rounded-lg  mx-auto">
              <div className="container custom-shadow custom-box2 p-16">
                <div className="text-gray-700 text-lg italic mb-4 text-box">"{testimonial.text}"</div>
              </div>
                <div className="flex items-center justify-center mt-2">
                    <img src={testimonial.image} alt={testimonial.name} className="w-17 h-17 rounded-full border-2 border-white shadow-md" />
                </div>
                <div className="flex justify-center mt-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
              </div>
              <div className="text-center mt-2">
                <div className="text-xl font-bold">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
