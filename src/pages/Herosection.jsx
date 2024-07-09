import React from 'react';
import Img from '../assets/Rectangle 3846.png';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="mt-6">
      <div className="container mx-auto px-48 text-left">
        <div className="text-center p-6 mb-4">
          <h1 className="text-4xl font-bold">We Strive To Deliver Development Services</h1>
          <p className="text-lg text-gray-600 mt-4">We specialize in creating visually appealing, high-quality, and user-friendly mobile applications.</p>
        </div>
        <div className="mb-6 font-bold">
          <ul className="flex justify-center">
            <li className="mr-8"><a href="#" className="hover:text-blue-700 ">Web development</a></li>
            <li className="mr-8"><a href="#" className="hover:text-blue-700 ">App development</a></li>
            <li className="mr-8"><a href="#" className="hover:text-blue-700 ">UI/UX development</a></li>
            <li className="mr-8"><a href="#" className="hover:text-blue-700 ">Digital Marketing</a></li>
          </ul>
          <hr className="mt-2 border-t-2 border-gray-400 w-2/3 mx-auto"/>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 prose p-4 bg-white main-div shadow rounded-lg">
          <div className="p-8">
            <h2 className="text-4xl font-bold">We Create Experience Not Just Apps</h2>
            <p className="pt-4">Delivering high performance, secure, customized and seamlessly integrated websites, web apps, portals, and web applications as per your requirements. We are experts in mature and emerging web technologies.</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Schedule a Meeting</button>
              <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded ml-2">Contact Us</button>
            </div>
          </div>
          <div className="p-8">
            <img src={Img} alt="Devices" className="mx-auto image-section"/>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
