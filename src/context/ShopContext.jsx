import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import assets from '../assets/assets.js';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const { products } = assets;

  const currency = "₹";
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // ✅ CART STATE
  const [cartItems, setCartItems] = useState({});

  // ✅ ADD TO CART
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      updated[itemId] = (updated[itemId] || 0) + 1;
      return updated;
    });
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }

      return updated;
    });
  };

  // ✅ CLEAR CART
  const clearCart = () => {
    setCartItems({});
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,

    // 🔥 ADD THESE
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};