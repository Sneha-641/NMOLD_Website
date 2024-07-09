import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import WhyChooseUs from './pages/WhyChooseUs';
import Delivers from './pages/Delivers';
import ClientReview from './pages/ClientReview';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import BannerBottom from './pages/BannerBottom';
import { Footer } from './pages/Footer';
import CopyrightBanner from './pages/CopyrightBanner';
import PricingMain from './pages/PricingMain';
import Navbar from './pages/Navbar';

import Form from './pages/Form';
import HeroSection from './pages/Herosection';
import ServicesSection from './pages/ServicesSection';
import TestimonialsSection from './pages/TestimonialsSection';

// https://www.figma.com/design/OWcieRQi0UaZrbx5sQM9jJ/NMOLD?node-id=0-1&t=Fz6quNMjalRuuomr-0
function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      {/* <Home />

      <WhyChooseUs />
      <Delivers />
      <ClientReview />
      <Pricing />
      <ContactUs />
      <BannerBottom /> */}

      {/* <PricingMain/> */}
      <Footer />
      <CopyrightBanner />
    </>
  );
}

function Main() {
  return (
    <main>
      <HeroSection />
      <ServicesSection/>
      <TestimonialsSection />
    </main>
  );
}

export default App;
