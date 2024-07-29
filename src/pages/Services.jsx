import React, { useState } from 'react';
import WebImg from '../assets/web_d_gif.gif';
import AppImg from '../assets/android-app-development-in-lucknow.gif';
import UIUXImg from '../assets/web-developmen-design-1.gif';
import DigitalImg from '../assets/Demystifying-The-Role-of-Analytics-1.gif';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import '../styles/Services.css';
import { Link } from 'react-router-dom';
import ClientReview from "./ClientReview";
const Services = () => {
  const [selectedService, setSelectedService] = useState('web');

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const testimonials = [
    {
      image: Image1,
      name: 'Robin Sharma',
      role: 'Customer',
      text: 'We are associated with Softhub for over 1 years now and it has been a pleasant experience. The team is quite efficient and comes up with innovative  idea development and strategies for growth.'
    },
    {
      image: Image2,
      name: 'Neha',
      role: 'Customer',
      text: 'SoftHub has been an excellent partner working with us across multiple projects. Being an agency we are now able to expand our working scope across various disciples, with the help of a true partnership.'
    }
  ];


  const renderHomeContent = () => {
    switch (selectedService) {
      case 'app':
        return (
          <>
            <h2 className="text-3xl font-bold head-left-img max-[500px]:text-[25px]">Converting Your App Ideas into Reality</h2>
            <p className="pt-4 text-[#6A6A6A] left-head-img01" style={{
              

            }}>We believes in blending latest mobile technologies with trending user engagement practices to deliver a user-friendly mobile app. We build apps, games, utilities, and core technology products for android and iOS.</p>
          </>
        );
      case 'uiux':
        return (
          <>
            <h2 className="text-3xl font-bold head-left-img max-[500px]:text-[25px]">UI Development as Per Your Needs</h2>
            <p className="pt-4 text-[#6A6A6A] left-head-img01" style={{
              

            }}>We take pride in offering a bunch of innovative user interface designing services that not only incorporate the latest technologies but also comply with user experience practices. We don’t design apps but a unique user experience.</p>
          </>
        );
      case 'digital':
        return (
          <>
            <h2 className="text-xl font-bold head-left-img2 max-[500px]:text-[25px]">Crafting Memorable, Innovative Digital Experiences.</h2>
            <p className="pt-4 text-[#6A6A6A] left-head-img01" style={{

            }}>We specialize in crafting unique user experiences through our innovative user interface design services. Leveraging the latest technologies and adhering to best practices in user experience, we don’t just design apps—we create memorable digital journeys.</p>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-3xl font-bold head-left-img3 max-[500px]:text-[25px]">We Create Experience Not Just Webs</h2>
            <p className="pt-4 text-[#6A6A6A] left-head-img01" style={{
              

            }}>Delivering high performance, secure, customized and seamlessly integrated websites, web apps, portals, and web applications as per your requirements. We are experts in mature and emerging web technologies.</p>
          </>
        );
    }
  };

  const renderServiceContent = () => {
    switch (selectedService) {
      case 'web':
        return (
          <>
            <ul className="list-disc mt-4 ml-7 border-r-[1px] max-[770px]:border-[0px] max-[770px]:ml-2 border-[black] border-solid">
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">Expertise :</h3>
                <p>Our team of professionals has extensive experience in various web development technologies and practices, ensuring that your website is built with the highest standards.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">Security :</h3>
                <p> We prioritize the security of your website, implementing best practices and robust measures to protect your data and users.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">SEO and Performance Optimization :</h3>
                <p> Our websites are optimized for search engines and performance, ensuring fast load times and better visibility online.</p>
              </li>
            </ul>
          </>
        );
      case 'app':
        return (
          <>
            <ul className="list-disc mt-4  ml-7 border-r-[1px] max-[770px]:border-[0px] border-[black] border-solid">
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">Expertise :</h3>
                <p>Our team of professionals has extensive experience in various mobile app development technologies and practices, ensuring that your app is built with the highest standards.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">Security :</h3>
                <p>  We prioritize the security of your app, implementing best practices and robust measures to protect your data and users.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">SEO and Performance Optimization :</h3>
                <p> Our apps are optimized for search engines and performance, ensuring fast load times and better visibility online.</p>
              </li>
            </ul>
          </>
        );
      case 'uiux':
        return (
          <>
            <ul className="list-disc mt-4  ml-7 border-r-[1px] max-[770px]:border-[0px] max-[770px]:ml-2 border-[black] border-solid">
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">Expertise :</h3>
                <p>Our team of professionals has extensive experience in various UI/UX design principles and practices, ensuring that your interface is intuitive and user-friendly.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">User-Centered Design :</h3>
                <p>We focus on creating designs that prioritize the needs and behaviors of your users, enhancing their interaction with your product.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">Customization :</h3>
                <p>We tailor each project to meet your unique needs, providing personalized solutions that align with your business goals and brand identity.</p>
              </li>
            </ul>
          </>
        );
      default:
        return (
          <>
            <ul className="list-disc mt-4  ml-7 border-r-[1px] max-[770px]:border-[0px] max-[770px]:ml-2 border-[black] border-solid">
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">SEO (Search Engine Optimization) :</h3>
                <p>We specialize in SEO strategies that enhance your online visibility and organic search engine rankings, driving targeted traffic to your website or app.</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
                <h3 className="font-bold">PPC (Pay-Per-Click) Advertising :</h3>
                <p>Our PPC experts create targeted campaigns on platforms like Google Ads and social media channels</p>
              </li>
              <li className="p-2 max-[770px]:p-1">
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
        <div className="container mx-auto px-0 text-left">
          <div className="text-center p-0 mb-4 max-[500px]:px-1">
            <h1 className="text-4xl font-bold max-[500px]:text-[25px]">We Strive To Deliver Development Services</h1>
            <p className="text-lg text-[#6A6A6A] mt-4 max-[500px]:mt-1 text-[16px] max-[500px]:text-[14px]" style={{
              fontWeight: "400",
              lineHeight: "27.52px",
              textAlign: "center",

            }}>We specialize in creating visually appealing, high-quality, and user-friendly mobile applications.</p>
          </div>
          <div className="mb-6 font-bold">
            <ul className="flex justify-center max-[500px]:hidden">
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
          <div className='min-[500px]:hidden'>
            <div className='ml-2'>
              Choose Service: 
              <select className='border border-gray-400 rounded p-2 ml-2' onChange={(e) => handleServiceChange(e.target.value)}>
                <option value='web'>Web Development</option>
                <option value='app'>App Development</option>
                <option value='uiux'>UI/UX Development</option>
                <option value='digital'>Digital Marketing</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 prose p-2 main-div mx-auto px-52 max-[1100px]:px-2">
          
        <div className="p-2 min-[500px]:hidden mt-5">
            <img src={getHeroImage()} alt="Devices" className="mx-auto image-section h-[439px]" />
          </div>
          <div className="p-2 ">
            {renderHomeContent()}
            <div className="mt-8">
              <button className="bg-[var(--theme)] text-white px-4 py-2 rounded"><Link to="/meetingform">
                Schedule a Meeting
              </Link></button>
              <button className="bg-white text-[var(--theme)] px-4 py-2 border border-blue-500 rounded ml-2"><Link to="/contactus">
                Contact Us
              </Link></button>
            </div>
          </div>
          <div className="p-2 max-[500px]:hidden">
            <img src={getHeroImage()} alt="Devices" className="mx-auto image-section h-[439px]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-[6rem] py-14 section-service mx-8 rounded-lg max-[700px]:mx-2">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 prose p-4 bg-white shadow rounded">
            <div className="p-4 bg-white">
              <h2 className="text-3xl font-bold pl-1">We work with you for growth</h2>
              {renderServiceContent()}
            </div>
            <div className="mt-4 max-[770px]:mt-0">
              {renderServiceRightContent()}
            </div>
          </div>
        </div>
      </section>
<br/>
<br/>
<br/>
      {/* Testimonials Section */}
      <div className='max-[505px]:mt-[-13rem] max-[705px]:mt-[-8rem]'>
            <ClientReview />
      </div>
      {/* <section className="mt-6 py-6">
        <div className="container mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white custom-shadow custom-box1 rounded-lg mx-auto testi-box-sup">
                <div className=" custom-shadow custom-box2 p-16 testi-box w-[560px]">
                  <div className="text-gray-700 italic mb-4 text-box testi-text-color">"{testimonial.text}"</div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <img src={testimonial.image} alt={testimonial.name} className="w-17 h-17 rounded-full border-2 shadow-md mt-[-3rem]" />
                </div>
                <div className="text-center mt-10">
                  <div className='flex justify-center items-center'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdd00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z" fill="#ffdd00"></path> <path opacity="0.5" d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z" fill="#ffdd00"></path> </g></svg>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdd00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z" fill="#ffdd00"></path> <path opacity="0.5" d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z" fill="#ffdd00"></path> </g></svg>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdd00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z" fill="#ffdd00"></path> <path opacity="0.5" d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z" fill="#ffdd00"></path> </g></svg>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdd00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z" fill="#ffdd00"></path> <path opacity="0.5" d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z" fill="#ffdd00"></path> </g></svg>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdd00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z" fill="#ffdd00"></path> <path opacity="0.5" d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z" fill="#ffdd00"></path> </g></svg>

                  </div>
                  <div className="text-xl font-bold mt-5">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
