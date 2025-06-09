
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  isVeg: boolean;
  option?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string, option?: string) => void;
  updateQuantity: (id: string, quantity: number, option?: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.id === item.id && i.option === item.option);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id && i.option === item.option
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, option?: string) => {
    setItems(prev => prev.filter(item => !(item.id === id && item.option === option)));
  };

  const updateQuantity = (id: string, quantity: number, option?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, option);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.option === option
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
