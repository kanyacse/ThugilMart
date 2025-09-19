import { createContext, useState } from 'react';  // ✅ include useState here
import PropTypes from 'prop-types';
import assets from '../assets/assets.js';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const { products } = assets; // ✅ extract products array
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState(''); // ✅ correct useState usage
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
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
