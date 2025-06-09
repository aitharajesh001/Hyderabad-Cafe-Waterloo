
import React from 'react';
import { Link } from 'react-router-dom';

const CateringEvents = () => {
  const eventImages = [
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Catering & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make your special occasions unforgettable with our authentic South Asian cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Special Event</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/catering"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
          >
            Book Catering
          </Link>
          <Link
            to="/events"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
          >
            Plan Your Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CateringEvents;
