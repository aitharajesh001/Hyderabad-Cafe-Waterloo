
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Diwali Special Menu",
      date: "October 25, 2024",
      description: "Celebrate the festival of lights with our special traditional menu featuring authentic sweets and savory dishes."
    },
    {
      title: "Live Music Night",
      date: "November 15, 2024",
      description: "Enjoy dinner with live traditional music performances while savoring our chef's special creations."
    },
    {
      title: "Cooking Class: Biryani Masterclass",
      date: "December 5, 2024",
      description: "Learn the secrets of making perfect Hyderabadi Biryani from our master chef."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Special Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join us for unforgettable dining experiences and cultural celebrations
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{event.date}</p>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors">
                    Reserve Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Event Planning */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Plan Your Private Event</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Let us help you create memorable experiences for your special occasions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4">Birthday Parties</h4>
                  <p className="text-muted-foreground">Celebrate with traditional flavors and festive atmosphere</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4">Anniversary Dinners</h4>
                  <p className="text-muted-foreground">Intimate dining experiences for your special milestone</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4">Cultural Celebrations</h4>
                  <p className="text-muted-foreground">Honor traditions with authentic cuisine and customs</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4">Business Dinners</h4>
                  <p className="text-muted-foreground">Impress clients and colleagues with exceptional hospitality</p>
                </div>
              </div>
              
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Start Planning
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
