import React, { useState } from 'react';
import WebImg from '../assets/Web.png';
import AppImg from '../assets/App.png'; 
import UIUXImg from '../assets/UiUx.png'; 
import DigitalImg from '../assets/Digital.png';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import '../styles/Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState('web');

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const testimonials = [
        {
          image: Image1,
          name: 'Savannah Nguyen',
          role: 'Customer',
          text: 'As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.'
        },
        {
          image: Image2,
          name: 'Savannah Nguyen',
          role: 'Customer',
          text: 'As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.'
        }
      ];


  const renderHomeContent = () => {
    switch (selectedService) {
      case 'app':
        return (
          <>
            <h2 className="text-4xl font-bold">Converting Your App Ideas into Reality</h2>
            <p className="pt-4">We believes in blending latest mobile technologies with trending user engagement practices to deliver a user-friendly mobile app. We build apps, games, utilities, and core technology products for android and iOS.</p>
          </>
        );
      case 'uiux':
        return (
          <>
            <h2 className="text-4xl font-bold">UI Development as Per Your Needs</h2>
            <p className="pt-4">We take pride in offering a bunch of innovative user interface designing services that not only incorporate the latest technologies but also comply with user experience practices. We don’t design apps but a unique user experience.</p>
          </>
        );
      case 'digital':
        return (
          <>
            <h2 className="text-4xl font-bold">Crafting Memorable, Innovative Digital Experiences.</h2>
            <p className="pt-4">we specialize in crafting unique user experiences through our innovative user interface design services. Leveraging the latest technologies and adhering to best practices in user experience, we don’t just design apps—we create memorable digital journeys.</p>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-4xl font-bold">We Create Experience Not Just Webs</h2>
            <p className="pt-4">Delivering high performance, secure, customized and seamlessly integrated websites, web apps, portals, and web applications as per your requirements. We are experts in mature and emerging web technologies.</p>
          </>
        );
    }
  };

  const renderServiceContent = () => {
    switch (selectedService) {
      case 'web':
        return (
          <>            
            <ul className="list-disc mt-4">
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
          </>
        );
      case 'app':
        return (
          <>
            <ul className="list-disc mt-4">
                <li className="p-2">
                  <h3 className="font-bold">Expertise :</h3>
                  <p>Our team of professionals has extensive experience in various mobile app development technologies and practices, ensuring that your app is built with the highest standards.</p>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Security :</h3>
                  <p>  We prioritize the security of your app, implementing best practices and robust measures to protect your data and users.</p>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">SEO and Performance Optimization :</h3>
                  <p> Our apps are optimized for search engines and performance, ensuring fast load times and better visibility online.</p>
                </li>
            </ul>
          </>
        );
      case 'uiux':
        return (
          <>
            <ul className="list-disc mt-4">
                <li className="p-2">
                  <h3 className="font-bold">Expertise :</h3>
                  <p>Our team of professionals has extensive experience in various UI/UX design principles and practices, ensuring that your interface is intuitive and user-friendly.</p>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">User-Centered Design :</h3>
                  <p>We focus on creating designs that prioritize the needs and behaviors of your users, enhancing their interaction with your product.</p>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Customization :</h3>
                  <p>We tailor each project to meet your unique needs, providing personalized solutions that align with your business goals and brand identity.</p>
                </li>
              </ul>
          </>
        );
      default:
        return (
          <>
            <ul className="list-disc mt-4">
                <li className="p-2">
                  <h3 className="font-bold">SEO (Search Engine Optimization) :</h3>
                  <p>We specialize in SEO strategies that enhance your online visibility and organic search engine rankings, driving targeted traffic to your website or app.</p>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">PPC (Pay-Per-Click) Advertising :</h3>
                  <p>Our PPC experts create targeted campaigns on platforms like Google Ads and social media channels</p>
                </li>
                <li className="p-2">
                  <h3 className="font-bold">Social Media Marketing :</h3>
                  <p>We develop customized social media strategies to build brand awareness, engage your audience</p>
                </li>
              </ul>
          </>
        );
    }
  };


  const renderServiceRightContent = () => {
    switch (selectedService) {
      case 'web':
        return (
          <>            
            <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">UI Development</h3>
                <p className="text-gray-600">We offer UI development for websites, apps, and portals, using cutting-edge design and user experience principles.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Responsive Websites</h3>
                <p className="text-gray-600">We provide responsive web development services using agile and innovative practices to ensure your website adapts seamlessly across all devices.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Web Apps</h3>
                <p className="text-gray-600">From planning to final product, e-commerce websites, collaboration portals, and custom web applications, we can handle them all as per your requirements.</p>
              </div>
          </>
        );
      case 'app':
        return (
          <>
            <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Andriod Apps</h3>
                <p className="text-gray-600">We are Android Experts and offer custom android app development services for startups and enterprise customers. Our team is well-versed in delivering customized android apps.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Ios Apps</h3>
                <p className="text-gray-600">Our team has deep expertise in iPhone application development services for businesses and startups. We have 10 years of experience in iOS app development and lifecycle management.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Cross platform</h3>
                <p className="text-gray-600">We got expertise in cross-platform mobile app development. It’s indeed a better and cost-effective way to build and maintain apps. Titanium, QT, Corona, Xamarin, we got it all.</p>
              </div>
          </>
        );
      case 'uiux':
        return (
          <>
            <div className="p-4 bg-white">
                <h3 className="text-xl font-bold">UNIQUE UI FOR EVERY ENGAGEMENT</h3>
                <p className="text-gray-600">We believe that every engagement is unique. Hence, our best UI designers provide totally unique and user-centric interface designs. Be it an app, product, web app, or some branding element, offering the best end-user experience is imperative.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold">DESIGN WITH FOCUS ON YOUR USERS</h3>
                <p className="text-gray-600">Being of the leading Design and Development Company, IQVIS has set the best SOP for service delivery. We incorporate the practices of user experience designs that include development activities.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold">MAXIMIZE YOUR ROI</h3>
                <p className="text-gray-600">Our UI design services help our clients offer a robust and scalable user experience, which let them maximize their ROI and achieve core business goals.</p>
              </div>
          </>
        );
      default:
        return (
          <>
            <div className="p-4 bg-white ">
                <h3 className="text-xl font-bold uppercase">Content Marketing</h3>
                <p className="text-gray-600">Create valuable content tailored to target audiences to drive engagement and app downloads.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Email Marketing</h3>
                <p className="text-gray-600">Execute email campaigns to nurture leads and promote app features, enhancing user acquisition and retention.</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold uppercase">Analytics and Reporting</h3>
                <p className="text-gray-600">Provide data-driven insights to optimize marketing efforts, measuring performance across platforms and app types.</p>
              </div>
          </>
        );
    }
  };

  const getHeroImage = () => {
    switch (selectedService) {
      case 'app':
        return AppImg;
      case 'uiux':
        return UIUXImg;
      case 'digital':
        return DigitalImg;
      default:
        return WebImg;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="mt-6">
        <div className="container mx-auto px-48 text-left">
          <div className="text-center p-6 mb-4">
            <h1 className="text-4xl font-bold">We Strive To Deliver Development Services</h1>
            <p className="text-lg text-gray-600 mt-4">We specialize in creating visually appealing, high-quality, and user-friendly mobile applications.</p>
          </div>
          <div className="mb-6 font-bold">
            <ul className="flex justify-center">
              <li className="mr-8">
                <button onClick={() => handleServiceChange('web')} className={`hover:text-blue-700 ${selectedService === 'web' ? 'text-blue-700' : ''}`}>Web Development</button>
              </li>
              <li className="mr-8">
                <button onClick={() => handleServiceChange('app')} className={`hover:text-blue-700 ${selectedService === 'app' ? 'text-blue-700' : ''}`}>App Development</button>
              </li>
              <li className="mr-8">
                <button onClick={() => handleServiceChange('uiux')} className={`hover:text-blue-700 ${selectedService === 'uiux' ? 'text-blue-700' : ''}`}>UI/UX Development</button>
              </li>
              <li className="mr-8">
                <button onClick={() => handleServiceChange('digital')} className={`hover:text-blue-700 ${selectedService === 'digital' ? 'text-blue-700' : ''}`}>Digital Marketing</button>
              </li>
            </ul>
            <hr className="mt-2 border-t-2 border-gray-400 w-2/3 mx-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 prose p-2 main-div mx-auto px-52">
             <div className="p-2 ">
                {renderHomeContent()}
               <div className="mt-8">
                 <button className="bg-blue-500 text-white px-4 py-2 rounded">Schedule a Meeting</button>
                 <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded ml-2">Contact Us</button>
               </div>
             </div>
             <div className="p-2">
               <img src={getHeroImage()} alt="Devices" className="mx-auto image-section" />
             </div>
           </div>
      </section>

      {/* Services Section */}
      <section className="mt-6 py-12 section-service">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 prose p-4 bg-white shadow rounded">
            <div className="p-4 bg-white">
                <h2 className="text-3xl font-bold pl-1">We work with you for growth</h2>
                {renderServiceContent()}
            </div>
            <div className="mt-4">
                {renderServiceRightContent()}
            </div>            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-6 py-6">
        <div className="container mx-auto px-48">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white custom-shadow custom-box1 rounded-lg mx-auto">
                <div className="container custom-shadow custom-box2 p-16">
                  <div className="text-gray-700 text-lg italic mb-4 text-box">"{testimonial.text}"</div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <img src={testimonial.image} alt={testimonial.name} className="w-17 h-17 rounded-full border-2 border-white shadow-md" />
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
    </div>
  );
};

export default Services;
