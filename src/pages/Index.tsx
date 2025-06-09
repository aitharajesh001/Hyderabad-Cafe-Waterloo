
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FoodStory from '../components/FoodStory';
import CateringEvents from '../components/CateringEvents';
import FeedbackSection from '../components/FeedbackSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FoodStory />
      <CateringEvents />
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
