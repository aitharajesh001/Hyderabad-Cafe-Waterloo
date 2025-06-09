
import React from 'react';

const FoodStory = () => {
  const stories = [
    {
      title: "Made with Heritage",
      description: "Every dish tells a story of tradition passed down through generations. Our recipes are crafted with the authentic flavors of Hyderabad, bringing the royal kitchens to your table.",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3"
    },
    {
      title: "Hyderabad on a Plate",
      description: "Experience the rich culinary heritage of the Nizams with our signature biryanis, kebabs, and traditional delicacies that capture the essence of the Pearl City.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3"
    },
    {
      title: "Savor the Street & Royal Feasts",
      description: "From the bustling streets of Charminar to the opulent halls of Chowmahalla Palace, we bring you the complete spectrum of Hyderabadi cuisine.",
      image: "https://images.unsplash.com/photo-1574653687175-3d2ad6a11de5?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-restaurant-brown mb-4">Our Heritage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A culinary journey through the flavors of Hyderabad
          </p>
        </div>

        <div className="space-y-20">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2 animate-fade-in">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-restaurant-brown/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6 animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-restaurant-brown">
                  {story.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
                <div className="w-24 h-1 bg-restaurant-gold rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodStory;
