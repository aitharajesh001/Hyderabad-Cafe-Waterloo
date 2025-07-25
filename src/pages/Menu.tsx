import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Star, Droplets } from 'lucide-react';
import { useCart, MenuItem } from '../hooks/useCart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MocktailSection from '../components/MocktailSection';

const Menu = () => {
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, items: cartItems, updateQuantity } = useCart();

  const getCartQuantity = (itemId: string, option?: string) => {
    const cartItem = cartItems.find(item => item.id === itemId && item.option === option);
    return cartItem ? cartItem.quantity : 0;
  };

  const getSpiceLevel = (spiceLevel: number) => {
    const chilis = '🌶️'.repeat(spiceLevel);
    const labels = ['', 'Mild', 'Medium', 'Spicy'];
    return (
      <span className="spice-indicator text-sm">
        <span>{chilis}</span>
        <span className="text-muted-foreground">({labels[spiceLevel]})</span>
      </span>
    );
  };

  const menuItems: (MenuItem & { spiceLevel?: number; isSpecial?: boolean; description: string })[] = [
    // Soups
    { id: 'soup-1', name: 'Manchow Soup', description: 'A hearty Indo-Chinese soup with vegetables and crispy fried noodles on top', price: 5.99, category: 'Soups', isVeg: true, spiceLevel: 2 },
    { id: 'soup-2', name: 'SweetCorn Soup', description: 'Creamy sweet corn soup with a perfect balance of sweet and tangy flavors', price: 5.99, category: 'Soups', isVeg: true, spiceLevel: 1 },
    { id: 'soup-3', name: 'Manchow Soup', description: 'Rich chicken and vegetable soup with aromatic spices and fried noodles', price: 5.99, category: 'Soups', isVeg: false, spiceLevel: 2 },
    { id: 'soup-4', name: 'SweetCorn Soup', description: 'Silky smooth chicken and sweet corn soup with egg ribbons', price: 5.99, category: 'Soups', isVeg: false, spiceLevel: 1 },
    { id: 'soup-5', name: 'Mutton Marag', description: 'Traditional Hyderabadi bone marrow soup with aromatic spices and fried onions', price: 6.99, category: 'Soups', isVeg: false, spiceLevel: 2, isSpecial: true },
    { id: 'soup-6', name: 'Mutton Paya', description: 'Slow-cooked trotters in rich, gelatinous broth - a Hyderabadi delicacy', price: 6.99, category: 'Soups', isVeg: false, spiceLevel: 2, isSpecial: true },

    // Appetizers
    { id: 'app-1', name: 'Crispy Corn', description: 'Golden corn kernels tossed with spices and herbs', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 2 },
    { id: 'app-2', name: 'Lemon Coriander Paneer', description: 'Soft paneer cubes in tangy lemon and fresh coriander marinade', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 1 },
    { id: 'app-3', name: 'Karivepaku Corn', description: 'Corn kernels infused with aromatic curry leaves and South Indian spices', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 2 },
    { id: 'app-4', name: 'Street Side Corn', description: 'Chargrilled corn with butter, lime, and chaat masala', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 2 },
    { id: 'app-5', name: 'Gobi 65', description: 'Spicy cauliflower florets marinated and deep-fried to perfection', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 3 },
    { id: 'app-6', name: 'Chilli Paneer', description: 'Indo-Chinese favorite with soft paneer in spicy sauce', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 3 },
    { id: 'app-7', name: 'Gobi Manchurian', description: 'Crispy cauliflower balls in sweet and spicy Manchurian sauce', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 2 },
    { id: 'app-8', name: 'Veg Manchurian', description: 'Mixed vegetable dumplings in tangy Manchurian gravy', price: 14.99, category: 'Appetizers', isVeg: true, spiceLevel: 2 },
    { id: 'app-9', name: 'Chicken Majestic', description: 'Royal preparation of chicken strips with cashews and aromatic spices', price: 15.99, category: 'Appetizers', isVeg: false, spiceLevel: 2, isSpecial: true },
    { id: 'app-10', name: 'Katarnak Kodi Pakoda', description: 'Explosive chicken fritters with intense Andhra spices', price: 15.99, category: 'Appetizers', isVeg: false, spiceLevel: 3 },
    { id: 'app-11', name: 'Chicken 65', description: 'Legendary spicy chicken appetizer from Chennai', price: 15.99, category: 'Appetizers', isVeg: false, spiceLevel: 3, isSpecial: true },
    { id: 'app-12', name: 'Chilli Chicken', description: 'Popular Indo-Chinese dish with tender chicken in spicy sauce', price: 15.99, category: 'Appetizers', isVeg: false, spiceLevel: 3 },
    { id: 'app-13', name: 'Dragon Chicken', description: 'Fiery chicken preparation with bold flavors and vibrant colors', price: 15.99, category: 'Appetizers', isVeg: false, spiceLevel: 3 },
    { id: 'app-14', name: 'Andhra Karam Kodi', description: 'Traditional Andhra-style spicy chicken with red chilies', price: 15.99, category: 'Appetizers', isVeg: false, spiceLevel: 3 },
    { id: 'app-15', name: 'Mutton Ghee Roast', description: 'Succulent mutton pieces roasted in clarified butter and spices', price: 16.99, category: 'Appetizers', isVeg: false, spiceLevel: 2, isSpecial: true },
    { id: 'app-16', name: 'Fish Pakoda', description: 'Fresh fish marinated in spices and gram flour, deep-fried', price: 17.99, category: 'Appetizers', isVeg: false, spiceLevel: 2 },
    { id: 'app-17', name: 'Chilli Garlic Prawns', description: 'Juicy prawns tossed with garlic and green chilies', price: 17.99, category: 'Appetizers', isVeg: false, spiceLevel: 3 },
    { id: 'app-18', name: 'Chilli Fish', description: 'Batter-fried fish in spicy Indo-Chinese sauce', price: 17.99, category: 'Appetizers', isVeg: false, spiceLevel: 3 },

    // Tikkas
    { id: 'tikka-1', name: 'Soya Chaap', description: '', price: 14.99, category: 'Tikkas', isVeg: true },
    { id: 'tikka-2', name: 'Hariyali Paneer Tikka', description: '', price: 14.99, category: 'Tikkas', isVeg: true },
    { id: 'tikka-3', name: 'Paneer Tikka', description: '', price: 14.99, category: 'Tikkas', isVeg: true },
    { id: 'tikka-4', name: 'Peshawari Tandoori Chicken', description: 'Half', price: 15.99, category: 'Tikkas', isVeg: false, option: 'Half' },
    { id: 'tikka-5', name: 'Peshawari Tandoori Chicken', description: 'Full', price: 26.99, category: 'Tikkas', isVeg: false, option: 'Full' },
    { id: 'tikka-6', name: 'Tangdi Chicken', description: '', price: 15.99, category: 'Tikkas', isVeg: false },
    { id: 'tikka-7', name: 'Sheik Kabab', description: 'Half', price: 15.99, category: 'Tikkas', isVeg: false, option: 'Half' },
    { id: 'tikka-8', name: 'Sheik Kabab', description: 'Full', price: 28.99, category: 'Tikkas', isVeg: false, option: 'Full' },
    { id: 'tikka-9', name: 'Hariyali Chicken Tikka', description: '', price: 15.99, category: 'Tikkas', isVeg: false },
    { id: 'tikka-10', name: 'Afgani Chicken Tikka', description: '', price: 15.99, category: 'Tikkas', isVeg: false },
    { id: 'tikka-11', name: 'Lahori Fish Tikka', description: '', price: 17.99, category: 'Tikkas', isVeg: false },
    { id: 'tikka-12', name: 'Fish Tikka', description: '', price: 17.99, category: 'Tikkas', isVeg: false },
    { id: 'tikka-13', name: 'Tandoori Chicken', description: 'Half', price: 15.99, category: 'Tikkas', isVeg: false, option: 'Half' },
    { id: 'tikka-14', name: 'Tandoori Chicken', description: 'Full', price: 26.99, category: 'Tikkas', isVeg: false, option: 'Full' },
    { id: 'tikka-15', name: 'Achari Chicken Tikka', description: '', price: 15.99, category: 'Tikkas', isVeg: false },

    // Momos - Veg
    { id: 'momo-1', name: 'Steamed Momos', description: '', price: 9.99, category: 'Momos', isVeg: true },
    { id: 'momo-2', name: 'Fried Momos', description: '', price: 10.99, category: 'Momos', isVeg: true },
    { id: 'momo-3', name: 'Butter Momos', description: '', price: 12.99, category: 'Momos', isVeg: true },
    { id: 'momo-4', name: 'Chilli Momos', description: '', price: 12.99, category: 'Momos', isVeg: true },
    { id: 'momo-5', name: 'Manchurian Momos', description: '', price: 12.99, category: 'Momos', isVeg: true },

    // Momos - Non-Veg (Chicken)
    { id: 'momo-6', name: 'Steamed Momos (Chicken)', description: '', price: 9.99, category: 'Momos', isVeg: false },
    { id: 'momo-7', name: 'Fried Momos (Chicken)', description: '', price: 10.99, category: 'Momos', isVeg: false },
    { id: 'momo-8', name: 'Butter Momos (Chicken)', description: '', price: 12.99, category: 'Momos', isVeg: false },
    { id: 'momo-9', name: 'Chilli Momos (Chicken)', description: '', price: 12.99, category: 'Momos', isVeg: false },
    { id: 'momo-10', name: 'Manchurian Momos (Chicken)', description: '', price: 12.99, category: 'Momos', isVeg: false },

    // Indo-Hakka - Fried Rice
    { id: 'rice-1', name: 'Fried Rice (Veg)', description: '', price: 11.99, category: 'Indo-Hakka', isVeg: true },
    { id: 'rice-2', name: 'Fried Rice (Egg)', description: '', price: 13.49, category: 'Indo-Hakka', isVeg: false },
    { id: 'rice-3', name: 'Fried Rice (Chicken)', description: '', price: 13.99, category: 'Indo-Hakka', isVeg: false },
    { id: 'rice-4', name: 'Street Style Fried Rice (Veg)', description: '', price: 11.99, category: 'Indo-Hakka', isVeg: true },
    { id: 'rice-5', name: 'Street Style Fried Rice (Egg)', description: '', price: 13.49, category: 'Indo-Hakka', isVeg: false },
    { id: 'rice-6', name: 'Street Style Fried Rice (Chicken)', description: '', price: 13.99, category: 'Indo-Hakka', isVeg: false },
    { id: 'rice-7', name: 'Manchurian Fried Rice (Veg)', description: '', price: 14.99, category: 'Indo-Hakka', isVeg: true },
    { id: 'rice-8', name: 'Chilli Chicken Fried Rice', description: '', price: 14.99, category: 'Indo-Hakka', isVeg: false },

    // Indo-Hakka - Noodles
    { id: 'noodles-1', name: 'Noodles (Veg)', description: '', price: 11.99, category: 'Indo-Hakka', isVeg: true },
    { id: 'noodles-2', name: 'Noodles (Egg)', description: '', price: 13.49, category: 'Indo-Hakka', isVeg: false },
    { id: 'noodles-3', name: 'Noodles (Chicken)', description: '', price: 13.99, category: 'Indo-Hakka', isVeg: false },
    { id: 'noodles-4', name: 'Street Style Noodles (Veg)', description: '', price: 11.99, category: 'Indo-Hakka', isVeg: true },
    { id: 'noodles-5', name: 'Street Style Noodles (Egg)', description: '', price: 13.49, category: 'Indo-Hakka', isVeg: false },
    { id: 'noodles-6', name: 'Street Style Noodles (Chicken)', description: '', price: 13.99, category: 'Indo-Hakka', isVeg: false },

    // Curries - Veg
    { id: 'curry-1', name: 'Tomato Cashew Nut Curry', description: '', price: 15.99, category: 'Curries', isVeg: true },
    { id: 'curry-2', name: 'Paneer Shahi Korma', description: '', price: 15.99, category: 'Curries', isVeg: true },
    { id: 'curry-3', name: 'Dal Tadka', description: '', price: 15.99, category: 'Curries', isVeg: true },
    { id: 'curry-4', name: 'Paneer Butter Masala', description: '', price: 15.99, category: 'Curries', isVeg: true },
    { id: 'curry-5', name: 'Paneer Tikka Masala', description: '', price: 15.99, category: 'Curries', isVeg: true },
    { id: 'curry-6', name: 'Kadai Paneer', description: '', price: 15.99, category: 'Curries', isVeg: true },
    { id: 'curry-7', name: 'Chana Masala', description: '', price: 15.99, category: 'Curries', isVeg: true },

    // Curries - Non-Veg
    { id: 'curry-8', name: 'Chicken Shahi Korma', description: '', price: 15.99, category: 'Curries', isVeg: false },
    { id: 'curry-9', name: 'Butter Chicken', description: '', price: 15.99, category: 'Curries', isVeg: false },
    { id: 'curry-10', name: 'Hyderabadi Chicken Curry', description: '', price: 15.99, category: 'Curries', isVeg: false },
    { id: 'curry-11', name: 'Chicken Tikka Masala', description: '', price: 15.99, category: 'Curries', isVeg: false },
    { id: 'curry-12', name: 'Murg Kali Mirch', description: '', price: 15.99, category: 'Curries', isVeg: false },
    { id: 'curry-13', name: 'Kadai Chicken', description: '', price: 15.99, category: 'Curries', isVeg: false },
    { id: 'curry-14', name: 'Mutton Karahi', description: '', price: 17.99, category: 'Curries', isVeg: false },
    { id: 'curry-15', name: 'Mutton Kheema', description: '', price: 17.99, category: 'Curries', isVeg: false },

    // Biryanis - Veg
    { id: 'biryani-1', name: 'Veg Dum Biryani', description: '1 person', price: 14.99, category: 'Biryanis', isVeg: true, option: '1 person' },
    { id: 'biryani-2', name: 'Veg Dum Biryani', description: '3 people', price: 31.99, category: 'Biryanis', isVeg: true, option: '3 people' },
    { id: 'biryani-3', name: 'Veg Dum Biryani', description: '5 people', price: 62.99, category: 'Biryanis', isVeg: true, option: '5 people' },
    { id: 'biryani-4', name: 'Cashew Paneer Biryani', description: '1 person', price: 15.99, category: 'Biryanis', isVeg: true, option: '1 person' },
    { id: 'biryani-5', name: 'Cashew Paneer Biryani', description: '3 people', price: 32.99, category: 'Biryanis', isVeg: true, option: '3 people' },
    { id: 'biryani-6', name: 'Cashew Paneer Biryani', description: '5 people', price: 64.99, category: 'Biryanis', isVeg: true, option: '5 people' },
    { id: 'biryani-7', name: 'Cashew Mushroom Biryani', description: '1 person', price: 15.99, category: 'Biryanis', isVeg: true, option: '1 person' },
    { id: 'biryani-8', name: 'Cashew Mushroom Biryani', description: '3 people', price: 32.99, category: 'Biryanis', isVeg: true, option: '3 people' },
    { id: 'biryani-9', name: 'Cashew Mushroom Biryani', description: '5 people', price: 64.99, category: 'Biryanis', isVeg: true, option: '5 people' },
    { id: 'biryani-10', name: 'Paneer Tikka Biryani', description: '1 person', price: 15.99, category: 'Biryanis', isVeg: true, option: '1 person' },
    { id: 'biryani-11', name: 'Paneer Tikka Biryani', description: '3 people', price: 32.99, category: 'Biryanis', isVeg: true, option: '3 people' },
    { id: 'biryani-12', name: 'Paneer Tikka Biryani', description: '5 people', price: 64.99, category: 'Biryanis', isVeg: true, option: '5 people' },

    // Biryanis - Non-Veg
    { id: 'biryani-13', name: 'Hyderabadi Chicken Dum Biryani', description: '1 person', price: 15.99, category: 'Biryanis', isVeg: false, option: '1 person' },
    { id: 'biryani-14', name: 'Hyderabadi Chicken Dum Biryani', description: '3 people', price: 32.99, category: 'Biryanis', isVeg: false, option: '3 people' },
    { id: 'biryani-15', name: 'Hyderabadi Chicken Dum Biryani', description: '5 people', price: 62.99, category: 'Biryanis', isVeg: false, option: '5 people' },
    { id: 'biryani-16', name: 'Chicken Boneless Biryani', description: '1 person', price: 16.99, category: 'Biryanis', isVeg: false, option: '1 person' },
    { id: 'biryani-17', name: 'Chicken Boneless Biryani', description: '3 people', price: 34.99, category: 'Biryanis', isVeg: false, option: '3 people' },
    { id: 'biryani-18', name: 'Chicken Boneless Biryani', description: '5 people', price: 64.99, category: 'Biryanis', isVeg: false, option: '5 people' },
    { id: 'biryani-19', name: 'Chicken Ghee Roast Biryani', description: '1 person', price: 16.99, category: 'Biryanis', isVeg: false, option: '1 person' },
    { id: 'biryani-20', name: 'Chicken Ghee Roast Biryani', description: '3 people', price: 34.99, category: 'Biryanis', isVeg: false, option: '3 people' },
    { id: 'biryani-21', name: 'Chicken Ghee Roast Biryani', description: '5 people', price: 64.99, category: 'Biryanis', isVeg: false, option: '5 people' },
    { id: 'biryani-22', name: 'Hyderabadi Mutton Dum Biryani', description: '1 person', price: 16.99, category: 'Biryanis', isVeg: false, option: '1 person' },
    { id: 'biryani-23', name: 'Hyderabadi Mutton Dum Biryani', description: '3 people', price: 34.99, category: 'Biryanis', isVeg: false, option: '3 people' },
    { id: 'biryani-24', name: 'Hyderabadi Mutton Dum Biryani', description: '5 people', price: 69.99, category: 'Biryanis', isVeg: false, option: '5 people' },
    { id: 'biryani-25', name: 'Riyaz Mutton Biryani', description: '1 person', price: 16.99, category: 'Biryanis', isVeg: false, option: '1 person' },
    { id: 'biryani-26', name: 'Riyaz Mutton Biryani', description: '3 people', price: 34.99, category: 'Biryanis', isVeg: false, option: '3 people' },
    { id: 'biryani-27', name: 'Riyaz Mutton Biryani', description: '5 people', price: 69.99, category: 'Biryanis', isVeg: false, option: '5 people' },
    { id: 'biryani-28', name: 'Mutton Ghee Roast Biryani', description: '1 person', price: 17.99, category: 'Biryanis', isVeg: false, option: '1 person' },
    { id: 'biryani-29', name: 'Mutton Ghee Roast Biryani', description: '3 people', price: 34.99, category: 'Biryanis', isVeg: false, option: '3 people' },
    { id: 'biryani-30', name: 'Mutton Ghee Roast Biryani', description: '5 people', price: 69.99, category: 'Biryanis', isVeg: false, option: '5 people' },

    // Pulaos - Veg
    { id: 'pulao-1', name: 'Cashew Paneer Pulao', description: '1 person', price: 15.99, category: 'Pulaos', isVeg: true, option: '1 person' },
    { id: 'pulao-2', name: 'Cashew Paneer Pulao', description: '3 people', price: 34.99, category: 'Pulaos', isVeg: true, option: '3 people' },
    { id: 'pulao-3', name: 'Cashew Paneer Pulao', description: '5 people', price: 64.99, category: 'Pulaos', isVeg: true, option: '5 people' },
    { id: 'pulao-4', name: 'Cashew Mushroom Pulao', description: '1 person', price: 15.99, category: 'Pulaos', isVeg: true, option: '1 person' },
    { id: 'pulao-5', name: 'Cashew Mushroom Pulao', description: '3 people', price: 34.99, category: 'Pulaos', isVeg: true, option: '3 people' },
    { id: 'pulao-6', name: 'Cashew Mushroom Pulao', description: '5 people', price: 64.99, category: 'Pulaos', isVeg: true, option: '5 people' },

    // Pulaos - Non-Veg
    { id: 'pulao-7', name: 'Spl Hyderabadi Chicken Pulao', description: '1 person', price: 15.99, category: 'Pulaos', isVeg: false, option: '1 person' },
    { id: 'pulao-8', name: 'Spl Hyderabadi Chicken Pulao', description: '3 people', price: 34.99, category: 'Pulaos', isVeg: false, option: '3 people' },
    { id: 'pulao-9', name: 'Spl Hyderabadi Chicken Pulao', description: '5 people', price: 64.99, category: 'Pulaos', isVeg: false, option: '5 people' },
    { id: 'pulao-10', name: 'Spl Hyderabadi Mutton Pulao', description: '1 person', price: 17.99, category: 'Pulaos', isVeg: false, option: '1 person' },
    { id: 'pulao-11', name: 'Spl Hyderabadi Mutton Pulao', description: '3 people', price: 36.99, category: 'Pulaos', isVeg: false, option: '3 people' },
    { id: 'pulao-12', name: 'Spl Hyderabadi Mutton Pulao', description: '5 people', price: 69.99, category: 'Pulaos', isVeg: false, option: '5 people' },

    // Bread Basket
    { id: 'bread-1', name: 'Tandoori Roti', description: '', price: 2.99, category: 'Bread Basket', isVeg: true },
    { id: 'bread-2', name: 'Plain Naan', description: '', price: 2.99, category: 'Bread Basket', isVeg: true },
    { id: 'bread-3', name: 'Butter Naan', description: '', price: 3.99, category: 'Bread Basket', isVeg: true },
    { id: 'bread-4', name: 'Garlic Naan', description: '', price: 4.49, category: 'Bread Basket', isVeg: true },
    { id: 'bread-5', name: 'Chilli Garlic Naan', description: '', price: 4.49, category: 'Bread Basket', isVeg: true },
    { id: 'bread-6', name: 'Bullet Naan', description: '', price: 4.99, category: 'Bread Basket', isVeg: true },

    // Snacks
    { id: 'snack-1', name: 'Malai Bun', description: '', price: 5.99, category: 'Snacks', isVeg: true },
    { id: 'snack-2', name: 'Mirchi', description: '', price: 5.99, category: 'Snacks', isVeg: true },
    { id: 'snack-3', name: 'Cut Mirchi', description: '', price: 6.99, category: 'Snacks', isVeg: true },
    { id: 'snack-4', name: 'Stuffed Mirchi', description: '', price: 6.99, category: 'Snacks', isVeg: true },

    // Beverages
    { id: 'bev-1', name: 'Lassi (Sweet)', description: '', price: 5.99, category: 'Beverages', isVeg: true },
    { id: 'bev-2', name: 'Lassi (Salt)', description: '', price: 5.99, category: 'Beverages', isVeg: true },
    { id: 'bev-3', name: 'Mango Lassi', description: '', price: 5.99, category: 'Beverages', isVeg: true },
    { id: 'bev-4', name: 'Chikoo Milk Shake', description: '', price: 6.99, category: 'Beverages', isVeg: true },
    { id: 'bev-5', name: 'Irani Chai (Small)', description: '', price: 1.49, category: 'Beverages', isVeg: true },
    { id: 'bev-6', name: 'Irani Chai (Medium)', description: '', price: 2.49, category: 'Beverages', isVeg: true },
    { id: 'bev-7', name: 'Irani Chai (Large)', description: '', price: 2.99, category: 'Beverages', isVeg: true },
    { id: 'bev-8', name: 'Lime Soda (Sweet)', description: '', price: 5.99, category: 'Beverages', isVeg: true },
    { id: 'bev-9', name: 'Lime Soda (Salt)', description: '', price: 5.99, category: 'Beverages', isVeg: true },
    { id: 'bev-10', name: 'Badam Milk', description: '', price: 5.99, category: 'Beverages', isVeg: true },
    { id: 'bev-11', name: 'Pop', description: '', price: 2.49, category: 'Beverages', isVeg: true },
    { id: 'bev-12', name: 'Thums Up / Limca', description: '', price: 3.99, category: 'Beverages', isVeg: true },
    { id: 'bev-13', name: 'Water Bottle', description: '', price: 1.99, category: 'Beverages', isVeg: true },

    // Desserts
    { id: 'dessert-1', name: 'Apricot Delight', description: '', price: 7.49, category: 'Desserts', isVeg: true },
    { id: 'dessert-2', name: 'Fruit Salad', description: '', price: 5.99, category: 'Desserts', isVeg: true },
    { id: 'dessert-3', name: 'Gulab Jamun', description: '', price: 4.99, category: 'Desserts', isVeg: true },
    { id: 'dessert-4', name: 'Rasmalai', description: '', price: 4.99, category: 'Desserts', isVeg: true },
    { id: 'dessert-5', name: 'Rice Kheer', description: '', price: 5.99, category: 'Desserts', isVeg: true },
  ];

  const categories = ['all', 'mocktails', ...Array.from(new Set(menuItems.map(item => item.category)))];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const vegMatch = filter === 'all' || (filter === 'veg' && item.isVeg) || (filter === 'non-veg' && !item.isVeg);
    return categoryMatch && vegMatch;
  });

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  const handleQuantityChange = (item: MenuItem, newQuantity: number) => {
    updateQuantity(item.id, newQuantity, item.option);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Show Mocktail Section or Regular Menu */}
      {selectedCategory === 'mocktails' ? (
        <MocktailSection />
      ) : (
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-restaurant-brown mb-4">Our Menu</h1>
              <p className="text-xl text-muted-foreground mb-6">Discover our authentic Hyderabadi flavors</p>
              
              {/* Spice Level Callout */}
              <div className="bg-restaurant-light-gold/20 border border-restaurant-gold/30 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-restaurant-brown font-medium">
                  🌶️ We recommend trying our specials — and yes, we're happy to go easy or bold on the spice! 🌶️
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-restaurant-gold text-white'
                        : 'bg-card text-restaurant-brown hover:bg-restaurant-light-gold'
                    } ${category === 'mocktails' ? 'relative overflow-hidden' : ''}`}
                  >
                    {category === 'mocktails' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-amber-400/20 to-orange-400/20 animate-gradient-x" />
                    )}
                    <span className="relative flex items-center gap-1">
                      {category === 'mocktails' && <Droplets className="w-4 h-4" />}
                      {category === 'all' ? 'All Categories' : 
                       category === 'mocktails' ? 'Signature Mocktails' : category}
                    </span>
                  </button>
                ))}
              </div>
            
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-restaurant-brown text-white'
                      : 'bg-card text-restaurant-brown hover:bg-restaurant-light-gold'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('veg')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'veg'
                      ? 'bg-restaurant-brown text-white'
                      : 'bg-card text-restaurant-brown hover:bg-restaurant-light-gold'
                  }`}
                >
                  🟢 Vegetarian
                </button>
                <button
                  onClick={() => setFilter('non-veg')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'non-veg'
                      ? 'bg-restaurant-brown text-white'
                      : 'bg-card text-restaurant-brown hover:bg-restaurant-light-gold'
                  }`}
                >
                  🔴 Non-Vegetarian
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const currentQuantity = getCartQuantity(item.id, item.option);
                const itemKey = `${item.id}-${item.option || 'default'}`;
                
                return (
                  <div key={itemKey} className="bg-card rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-border hover:border-restaurant-gold/50">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-restaurant-brown">{item.name}</h3>
                        {item.isSpecial && (
                          <div className="flex items-center gap-1 bg-restaurant-gold text-white px-2 py-1 rounded-full text-xs font-medium">
                            <Star className="w-3 h-3" />
                            Special
                          </div>
                        )}
                      </div>
                      <span className={`text-lg ${item.isVeg ? 'text-green-600' : 'text-red-600'}`}>
                        {item.isVeg ? '🟢' : '🔴'}
                      </span>
                    </div>
                    
                    {item.description && (
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                    )}
                    
                    {item.spiceLevel && (
                      <div className="mb-3">
                        {getSpiceLevel(item.spiceLevel)}
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-restaurant-gold">${item.price}</span>
                      
                      {currentQuantity > 0 ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleQuantityChange(item, currentQuantity - 1)}
                            className="w-8 h-8 rounded-full bg-restaurant-light-gold text-restaurant-brown flex items-center justify-center hover:bg-restaurant-gold hover:text-white transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold min-w-[20px] text-center text-restaurant-brown">{currentQuantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item, currentQuantity + 1)}
                            className="w-8 h-8 rounded-full bg-restaurant-light-gold text-restaurant-brown flex items-center justify-center hover:bg-restaurant-gold hover:text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-restaurant-gold hover:bg-restaurant-brown text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No items found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Menu;
