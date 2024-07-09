import React from 'react'
import "../styles/ServicesSection.css"

function ServicesSection() {
  return (
    <section className="mt-10 py-4 section-service">
      <div className="container mx-auto px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 prose p-4 bg-white shadow rounded">
          <div className="p-4 bg-white">
            <h2 className="text-3xl font-bold pl-1">We work with you for growth</h2>
            <ul classname="list-disc mt-4">
              <li className="p-2">
                <h3 className="font-bold">Expertise :</h3> 
                <p>Our team of professionals has extensive experience in various web development technologies and practices, ensuring that your website is built with the highest standards.</p>
              </li>
              <li className="p-2">
                <h3 className="font-bold">Security :</h3> 
                <p> We prioritize the security of your website, implementing best practices and robust measures to protect your data and users.</p>
              </li>
              <li className="p-2">
                <h3 className="font-bold">SEO and Performance Optimization :</h3> 
                <p> Our websites are optimized for search engines and performance, ensuring fast load times and better visibility online.</p>
              </li>
            </ul>
          </div>
          <div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold">UI Development</h3>
              <p className="text-gray-600">We offer UI development for websites, apps, and portals, using cutting-edge design and user experience principles.</p>
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold">Responsive Websites</h3>
              <p className="text-gray-600">We provide responsive web development services using agile and innovative practices to ensure your website adapts seamlessly across all devices.</p>
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold">Web Apps</h3>
            <p className="text-gray-600">From planning to final product, e-commerce websites, collaboration portals, and custom web applications, we can handle them all as per your requirements.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
