
import React from 'react';

const FoodStory = () => {
  const stories = [
    {
      title: "Crafted with Tradition",
      description: "Every dish tells a story passed down through generations, where ancient recipes meet modern culinary artistry.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3",
      reverse: false
    },
    {
      title: "Spice Meets Soul",
      description: "Our carefully curated spices create a symphony of flavors that awaken your senses and warm your heart.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3",
      reverse: true
    },
    {
      title: "Locally Sourced Ingredients",
      description: "We partner with local farmers and suppliers to bring you the freshest, highest quality ingredients in every meal.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3",
      reverse: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the passion and heritage behind every dish we serve
          </p>
        </div>
        
        <div className="space-y-32">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col ${story.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 animate-fade-in">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 text-center lg:text-left animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {story.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodStory;
