import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Sparkles, ChefHat } from 'lucide-react';
import { useCart, MenuItem } from '../hooks/useCart';

interface MocktailItem extends MenuItem {
  description: string;
  ingredients: string[];
  imageUrl: string;
  categoryType: 'delights' | 'classics' | 'spicy';
  signature?: boolean;
}

interface Category {
  id: string;
  name: string;
  type: 'delights' | 'classics' | 'spicy';
  items: MocktailItem[];
}

const MocktailDisplay: React.FC<{
  mocktail: MocktailItem;
  addToCart: (item: MenuItem) => void;
  cartQuantity: number;
  updateQuantity: (id: string, quantity: number) => void;
}> = ({ mocktail, addToCart, cartQuantity, updateQuantity }) => {
  const getCategoryStyles = () => {
    switch (mocktail.categoryType) {
      case 'delights':
        return {
          gradient: 'from-rose-900/30 via-pink-900/20 to-purple-900/30',
          accent: 'text-rose-300',
          glow: 'shadow-rose-500/30'
        };
      case 'classics':
        return {
          gradient: 'from-amber-900/30 via-orange-900/20 to-yellow-900/30',
          accent: 'text-amber-300',
          glow: 'shadow-amber-500/30'
        };
      case 'spicy':
        return {
          gradient: 'from-red-900/30 via-orange-900/20 to-yellow-900/30',
          accent: 'text-orange-300',
          glow: 'shadow-red-500/30'
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <div className="relative h-screen flex flex-col justify-center items-center p-6">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-90`} />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-sm mx-auto text-center">
        
        {/* Mocktail Image/GIF Placeholder */}
        <div className="relative mb-8">
          <div className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-br ${styles.gradient} border-2 border-primary/30 ${styles.glow} shadow-2xl flex items-center justify-center overflow-hidden`}>
            {/* Placeholder rotating effect */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 animate-spin-slow flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-background/80 to-muted/80 flex items-center justify-center">
                <Sparkles className={`w-16 h-16 ${styles.accent} animate-pulse`} />
              </div>
            </div>
          </div>
        </div>

        {/* Signature Badge */}
        {mocktail.signature && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-4">
            <ChefHat className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Chef's Special</span>
          </div>
        )}

        {/* Mocktail Name */}
        <h2 className="text-3xl font-bold text-foreground mb-3">{mocktail.name}</h2>

        {/* Price */}
        <div className="text-2xl font-bold text-primary mb-4">${mocktail.price}</div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {mocktail.description}
        </p>

        {/* Ingredients */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {mocktail.ingredients.map((ingredient, index) => (
            <span
              key={ingredient}
              className={`px-3 py-1 rounded-full text-xs border border-primary/30 ${styles.accent} bg-primary/10`}
            >
              {ingredient}
            </span>
          ))}
        </div>

        {/* Add to Cart */}
        <div className="flex justify-center">
          {cartQuantity > 0 ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(mocktail.id, Math.max(0, cartQuantity - 1))}
                className="w-10 h-10 rounded-full bg-muted/80 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-all"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-xl font-semibold w-8 text-center">{cartQuantity}</span>
              <button
                onClick={() => updateQuantity(mocktail.id, cartQuantity + 1)}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(mocktail)}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryNavigation: React.FC<{
  categories: Category[];
  activeCategory: string;
  activeMocktail: string;
  onCategorySelect: (categoryId: string) => void;
  onMocktailSelect: (mocktailId: string) => void;
}> = ({ categories, activeCategory, activeMocktail, onCategorySelect, onMocktailSelect }) => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 space-y-1 max-h-[80vh] overflow-y-auto">
      {categories.map((category) => (
        <div key={category.id} className="space-y-1">
          {/* Category Header */}
          <button
            onClick={() => onCategorySelect(category.id)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === category.id
                ? 'bg-primary/20 text-primary border border-primary/40'
                : 'bg-background/80 text-muted-foreground border border-border hover:bg-muted/50'
            }`}
          >
            {category.name}
          </button>
          
          {/* Category Items */}
          {activeCategory === category.id && (
            <div className="pl-2 space-y-1">
              {category.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onMocktailSelect(item.id)}
                  className={`block w-full text-left px-3 py-1.5 rounded text-xs transition-all ${
                    activeMocktail === item.id
                      ? 'bg-accent/30 text-accent-foreground border border-accent/50'
                      : 'bg-background/60 text-muted-foreground border border-border/50 hover:bg-muted/30'
                  }`}
                >
                  {item.name}
                  {item.signature && (
                    <span className="ml-1 text-primary">★</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const MocktailSection: React.FC = () => {
  const { addToCart, items: cartItems, updateQuantity } = useCart();
  const [activeCategory, setActiveCategory] = useState('delights');
  const [activeMocktail, setActiveMocktail] = useState('');
  const [displayMocktail, setDisplayMocktail] = useState<MocktailItem | null>(null);

  const getCartQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const categories: Category[] = [
    {
      id: 'delights',
      name: 'Delights',
      type: 'delights',
      items: [
        {
          id: 'lichi-delight',
          name: 'Lichi Delight',
          description: 'Sweet and fragrant lychee with a burst of tropical freshness',
          price: 7.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Lychee', 'Mint', 'Lime', 'Sparkling Water'],
          imageUrl: '',
          categoryType: 'delights',
          signature: true
        },
        {
          id: 'mango-delight',
          name: 'Mango Delight',
          description: 'Creamy mango blend with hints of cardamom and rose',
          price: 7.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Mango', 'Cardamom', 'Rose Water', 'Cream'],
          imageUrl: '',
          categoryType: 'delights'
        },
        {
          id: 'kiwi-delight',
          name: 'Kiwi Delight',
          description: 'Tangy kiwi with fresh herbs and a touch of honey',
          price: 7.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Kiwi', 'Mint', 'Honey', 'Lime'],
          imageUrl: '',
          categoryType: 'delights'
        },
        {
          id: 'blueberry-delight',
          name: 'Blueberry Delight',
          description: 'Antioxidant-rich blueberries with lavender and lemon',
          price: 8.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Blueberry', 'Lavender', 'Lemon', 'Agave'],
          imageUrl: '',
          categoryType: 'delights'
        },
        {
          id: 'strawberry-delight',
          name: 'Strawberry Delight',
          description: 'Fresh strawberries with basil and balsamic reduction',
          price: 7.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Strawberry', 'Basil', 'Balsamic', 'Soda'],
          imageUrl: '',
          categoryType: 'delights'
        },
        {
          id: 'lime-delight',
          name: 'Lime',
          description: 'Classic lime with fresh herbs and sparkling finish',
          price: 6.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Lime', 'Mint', 'Sugar', 'Soda'],
          imageUrl: '',
          categoryType: 'delights'
        }
      ]
    },
    {
      id: 'classics',
      name: 'Classics',
      type: 'classics',
      items: [
        {
          id: 'pinacolada',
          name: 'Pinacolada',
          description: 'Tropical coconut and pineapple cream dream',
          price: 8.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Pineapple', 'Coconut Cream', 'Coconut Milk', 'Ice'],
          imageUrl: '',
          categoryType: 'classics',
          signature: true
        },
        {
          id: 'daiquiri',
          name: 'Daiquiri',
          description: 'Refreshing lime and mint non-alcoholic classic',
          price: 7.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Lime', 'Mint', 'Sugar', 'Soda'],
          imageUrl: '',
          categoryType: 'classics'
        },
        {
          id: 'summer-sunset',
          name: 'Summer Sunset',
          description: 'Layered fruit medley with tropical sunset colors',
          price: 8.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Orange', 'Mango', 'Grenadine', 'Soda'],
          imageUrl: '',
          categoryType: 'classics'
        },
        {
          id: 'margarita',
          name: 'Margarita',
          description: 'Zesty lime with salt rim and agave sweetness',
          price: 7.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Lime', 'Agave', 'Salt', 'Triple Sec'],
          imageUrl: '',
          categoryType: 'classics'
        },
        {
          id: 'basil-mint',
          name: 'Basil Mint',
          description: 'Aromatic herb blend with cucumber and lime',
          price: 7.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Basil', 'Mint', 'Cucumber', 'Lime'],
          imageUrl: '',
          categoryType: 'classics'
        },
        {
          id: 'mojito',
          name: 'Mojito',
          description: 'Traditional mint and lime with sparkling water',
          price: 7.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Mint', 'Lime', 'Sugar', 'Soda'],
          imageUrl: '',
          categoryType: 'classics',
          signature: true
        }
      ]
    },
    {
      id: 'spicy',
      name: 'Spicy Style',
      type: 'spicy',
      items: [
        {
          id: 'spicy-mango',
          name: 'Spicy Mango',
          description: 'Fiery mango with jalapeño and tajín rim',
          price: 8.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Mango', 'Jalapeño', 'Tajín', 'Lime'],
          imageUrl: '',
          categoryType: 'spicy',
          signature: true
        },
        {
          id: 'chilli-guava',
          name: 'Chilli Guava',
          description: 'Sweet guava with green chili and chat masala',
          price: 8.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Guava', 'Green Chili', 'Chat Masala', 'Lemon'],
          imageUrl: '',
          categoryType: 'spicy'
        },
        {
          id: 'masala-martini',
          name: 'Masala Martini',
          description: 'Spiced blend with cumin, black salt, and mint',
          price: 8.99,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Cumin', 'Black Salt', 'Mint', 'Lemon'],
          imageUrl: '',
          categoryType: 'spicy'
        },
        {
          id: 'spiced-jamun',
          name: 'Spiced Jamun',
          description: 'Dark jamun with roasted spices and rock salt',
          price: 8.49,
          category: 'Mocktails',
          isVeg: true,
          ingredients: ['Jamun', 'Roasted Spices', 'Rock Salt', 'Mint'],
          imageUrl: '',
          categoryType: 'spicy'
        }
      ]
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    const category = categories.find(c => c.id === categoryId);
    if (category && category.items.length > 0) {
      const firstItem = category.items[0];
      setActiveMocktail(firstItem.id);
      setDisplayMocktail(firstItem);
    }
  };

  const handleMocktailSelect = (mocktailId: string) => {
    setActiveMocktail(mocktailId);
    const mocktail = categories.flatMap(c => c.items).find(item => item.id === mocktailId);
    if (mocktail) {
      setDisplayMocktail(mocktail);
    }
  };

  // Initialize with first item
  useEffect(() => {
    if (categories.length > 0 && categories[0].items.length > 0) {
      const firstItem = categories[0].items[0];
      setActiveMocktail(firstItem.id);
      setDisplayMocktail(firstItem);
    }
  }, []);

  return (
    <section className="relative bg-background min-h-screen overflow-hidden">
      {/* Header */}
      <div className="relative py-12 text-center bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.15),transparent_60%)]" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Signature Mocktails
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We recommend trying our specials — and yes, we're happy to go easy or bold on the spice 🌶️!
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        activeMocktail={activeMocktail}
        onCategorySelect={handleCategorySelect}
        onMocktailSelect={handleMocktailSelect}
      />

      {/* Main Display */}
      <div className="relative">
        {displayMocktail && (
          <MocktailDisplay
            mocktail={displayMocktail}
            addToCart={addToCart}
            cartQuantity={getCartQuantity(displayMocktail.id)}
            updateQuantity={updateQuantity}
          />
        )}
      </div>
    </section>
  );
};

export default MocktailSection;