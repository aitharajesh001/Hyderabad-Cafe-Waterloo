import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Droplets, Sparkles } from 'lucide-react';
import { useCart, MenuItem } from '../hooks/useCart';

interface MocktailItemProps extends MenuItem {
  description: string;
  ingredients: string[];
  imageUrl: string;
  concept: 'refreshing' | 'sophisticated' | 'tropical';
  signature?: boolean;
}

const MocktailCard: React.FC<{ 
  mocktail: MocktailItemProps; 
  isInView: boolean;
  addToCart: (item: MenuItem) => void;
  cartQuantity: number;
  updateQuantity: (id: string, quantity: number) => void;
}> = ({ mocktail, isInView, addToCart, cartQuantity, updateQuantity }) => {
  const [animationPhase, setAnimationPhase] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const phases = [0, 1, 2, 3, 4];
      phases.forEach((phase, index) => {
        setTimeout(() => setAnimationPhase(phase), index * 300);
      });
    } else {
      setAnimationPhase(0);
    }
  }, [isInView]);

  const getConceptStyles = () => {
    switch (mocktail.concept) {
      case 'refreshing':
        return {
          gradient: 'from-blue-900/20 via-cyan-900/20 to-green-900/20',
          accent: 'border-cyan-400/30',
          glow: 'shadow-cyan-400/20',
          textAccent: 'text-cyan-300'
        };
      case 'sophisticated':
        return {
          gradient: 'from-amber-900/20 via-yellow-900/20 to-orange-900/20',
          accent: 'border-amber-400/30',
          glow: 'shadow-amber-400/20',
          textAccent: 'text-amber-300'
        };
      case 'tropical':
        return {
          gradient: 'from-pink-900/20 via-orange-900/20 to-yellow-900/20',
          accent: 'border-orange-400/30',
          glow: 'shadow-orange-400/20',
          textAccent: 'text-orange-300'
        };
    }
  };

  const styles = getConceptStyles();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
      {/* Background Glass Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 transition-all duration-1000 ${
          animationPhase >= 1 ? 'opacity-100' : ''
        }`}
      />
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-md w-full">
        
        {/* Mocktail Glass Container */}
        <div className="relative mb-8">
          {/* Glass Silhouette */}
          <div 
            className={`w-80 h-96 mx-auto relative transition-all duration-700 ${
              animationPhase >= 0 ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {/* Base Glass Shape */}
            <div className={`absolute inset-0 rounded-t-full border-2 ${styles.accent} transition-all duration-500 ${
              animationPhase >= 1 ? `shadow-lg ${styles.glow}` : ''
            }`}>
              
              {/* Liquid Fill */}
              <div 
                className={`absolute bottom-0 left-2 right-2 bg-gradient-to-t ${styles.gradient} rounded-b-full transition-all duration-800 ${
                  animationPhase >= 2 ? 'h-3/4' : 'h-0'
                }`}
              />
              
              {/* Garnish & Effects */}
              <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
                <Sparkles className={`w-6 h-6 ${styles.textAccent}`} />
              </div>
              
              {/* Condensation Effect */}
              <div className={`absolute inset-0 rounded-t-full transition-opacity duration-700 ${
                animationPhase >= 4 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
          
          {/* Floating Ingredients */}
          <div className="absolute inset-0 pointer-events-none">
            {mocktail.ingredients.slice(0, 3).map((ingredient, index) => (
              <div
                key={ingredient}
                className={`absolute text-xs ${styles.textAccent} bg-black/60 px-2 py-1 rounded-full transition-all duration-500 ${
                  animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  left: `${20 + index * 25}%`,
                  top: `${30 + index * 15}%`,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {ingredient}
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className={`text-center space-y-4 transition-all duration-700 ${
          animationPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Signature Badge */}
          {mocktail.signature && (
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border ${styles.accent} ${styles.textAccent} text-sm`}>
              <Droplets className="w-4 h-4" />
              Signature Creation
            </div>
          )}
          
          {/* Mocktail Name */}
          <h2 className="text-3xl font-bold text-primary">{mocktail.name}</h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            {mocktail.description}
          </p>
          
          {/* Ingredients */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {mocktail.ingredients.map((ingredient) => (
              <span
                key={ingredient}
                className={`px-3 py-1 rounded-full text-sm border ${styles.accent} ${styles.textAccent}`}
              >
                {ingredient}
              </span>
            ))}
          </div>
          
          {/* Price & Actions */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <span className="text-2xl font-bold text-primary">${mocktail.price}</span>
            
            <div className="flex items-center gap-3">
              {cartQuantity > 0 ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(mocktail.id, Math.max(0, cartQuantity - 1))}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{cartQuantity}</span>
                  <button
                    onClick={() => updateQuantity(mocktail.id, cartQuantity + 1)}
                    className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(mocktail)}
                  className={`px-6 py-2 rounded-full border-2 ${styles.accent} ${styles.textAccent} hover:bg-current hover:bg-opacity-10 transition-all duration-300`}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MocktailSection: React.FC = () => {
  const { addToCart, items: cartItems, updateQuantity } = useCart();
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const getCartQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const mocktails: MocktailItemProps[] = [
    {
      id: 'mocktail-1',
      name: 'Tropical Paradise',
      description: 'A vibrant blend of fresh pineapple, mango, and passion fruit with a hint of mint and lime zest',
      price: 7.99,
      category: 'Mocktails',
      isVeg: true,
      ingredients: ['Pineapple', 'Mango', 'Passion Fruit', 'Mint', 'Lime'],
      imageUrl: '',
      concept: 'tropical',
      signature: true
    },
    {
      id: 'mocktail-2',
      name: 'Golden Sunset',
      description: 'Sophisticated blend of fresh orange, ginger, and aromatic herbs topped with golden turmeric foam',
      price: 8.99,
      category: 'Mocktails',
      isVeg: true,
      ingredients: ['Orange', 'Ginger', 'Turmeric', 'Honey', 'Herbs'],
      imageUrl: '',
      concept: 'sophisticated',
      signature: true
    },
    {
      id: 'mocktail-3',
      name: 'Cucumber Mint Cooler',
      description: 'Refreshing combination of crisp cucumber, fresh mint, and lime with a splash of sparkling water',
      price: 6.99,
      category: 'Mocktails',
      isVeg: true,
      ingredients: ['Cucumber', 'Mint', 'Lime', 'Sparkling Water'],
      imageUrl: '',
      concept: 'refreshing'
    },
    {
      id: 'mocktail-4',
      name: 'Spiced Mango Lassi',
      description: 'Traditional Indian yogurt drink elevated with fresh mango, cardamom, and a touch of rose water',
      price: 7.49,
      category: 'Mocktails',
      isVeg: true,
      ingredients: ['Mango', 'Yogurt', 'Cardamom', 'Rose Water'],
      imageUrl: '',
      concept: 'sophisticated'
    },
    {
      id: 'mocktail-5',
      name: 'Berry Hibiscus Fizz',
      description: 'Antioxidant-rich hibiscus tea infused with mixed berries and topped with effervescent bubbles',
      price: 7.99,
      category: 'Mocktails',
      isVeg: true,
      ingredients: ['Hibiscus', 'Mixed Berries', 'Sparkling Water', 'Honey'],
      imageUrl: '',
      concept: 'refreshing'
    },
    {
      id: 'mocktail-6',
      name: 'Coconut Dream',
      description: 'Creamy coconut milk blended with tropical fruits and garnished with toasted coconut flakes',
      price: 8.49,
      category: 'Mocktails',
      isVeg: true,
      ingredients: ['Coconut Milk', 'Pineapple', 'Banana', 'Coconut Flakes'],
      imageUrl: '',
      concept: 'tropical'
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemId = entry.target.getAttribute('data-item-id');
          if (itemId) {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, itemId]));
            } else {
              setVisibleItems(prev => {
                const newSet = new Set(prev);
                newSet.delete(itemId);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-item-id]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section className="bg-background min-h-screen">
      {/* Header */}
      <div className="relative py-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Signature Mocktails
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We recommend trying our specials — and yes, we're happy to go easy or bold on the spice 🌶️!
          </p>
        </div>
      </div>

      {/* Mocktail Cards */}
      <div className="relative">
        {mocktails.map((mocktail, index) => (
          <div
            key={mocktail.id}
            data-item-id={mocktail.id}
            className="relative"
          >
            <MocktailCard
              mocktail={mocktail}
              isInView={visibleItems.has(mocktail.id)}
              addToCart={addToCart}
              cartQuantity={getCartQuantity(mocktail.id)}
              updateQuantity={updateQuantity}
            />
            
            {/* Separator */}
            {index < mocktails.length - 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MocktailSection;