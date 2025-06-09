
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeedbackSection from '../components/FeedbackSection';

const Feedback = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing food! The biryani was perfectly spiced and the service was exceptional. Will definitely be coming back!",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best South Asian restaurant in the city. The flavors are authentic and remind me of my travels to India. Highly recommended!",
      date: "1 month ago"
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment: "Great atmosphere and delicious food. The paneer dishes were especially good. Looking forward to trying more items from the menu.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Feedback</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your experience matters to us. Share your thoughts and read what others are saying.
            </p>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <FeedbackSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Feedback;
