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
// import ServicesSection 
import Form from './pages/Form';
import MeetingForm from './pages/MeetingForm';
import Services from './pages/Services';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MeetingCalender from './pages/MeetingCalender';
// https://www.figma.com/design/OWcieRQi0UaZrbx5sQM9jJ/NMOLD?node-id=0-1&t=Fz6quNMjalRuuomr-0
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourservices" element={<Services />} />
        <Route path="/pricing" element={<PricingMain />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/meetingform" element={<MeetingForm />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsOfUse />} />
      </Routes>
      <Footer />
      <CopyrightBanner />
    </>
  );
}


export default App;