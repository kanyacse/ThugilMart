import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaSearch, FaTimes } from "react-icons/fa"; // Importing search and close icons

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false); // ✅ Correct useState
  const location = useLocation(); // ✅ Get current location

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? ( // ✅ Check both showSearch and visible
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <FaSearch className="w-4 h-4 text-gray-600" />
      </div>
      <FaTimes
        onClick={() => setShowSearch(false)}
        className="inline w-4 h-4 cursor-pointer text-gray-600"
        title="Close search"
      />
    </div>
  ) : null;
};

export default SearchBar;
