import { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import assets from '../assets/assets';
import { ShopContext } from '../context/ShopContext'; // ✅ Import ShopContext

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext); // ✅ Access setShowSearch

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center py-4 px-6 shadow-md">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logos.main} alt="Logo" className="w-36" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 mx-auto">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <FaSearch
            onClick={() => setShowSearch(true)} // ✅ Open search bar when clicked
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors"
            title="Search"
          />

          <div className="group relative">
            <FaUser className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">3</p>
          </Link>

          {/* Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.icons.webp}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu Icon"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 ease-in-out ${
          visible ? 'w-full' : 'w-0'
        } overflow-hidden`}
        style={{ maxWidth: '100vw' }}
      >
        {visible && (
          <div className="flex flex-col text-gray-600 h-full">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img className="h-4 rotate-180" src={assets.icons.webp} alt="Close Icon" />
              <p>Back</p>
            </div>

            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
              HOME
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
              COLLECTION
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
              ABOUT
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
              CONTACT
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
