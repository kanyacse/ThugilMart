import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import assets from '../assets/assets.js';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle category selection
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle subcategory selection
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply search, category/subcategory filters and sorting
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Search filter
    if (showSearch && search.trim() !== '') {
      const lowerSearch = search.toLowerCase();
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(lowerSearch)
      );
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sorting
    switch (sortType) {
      case 'lowToHigh':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  // Reapply filters whenever products, search, category, subCategory, or sortType changes
  useEffect(() => {
    applyFilter();
  }, [products, search, showSearch, category, subCategory, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t">
      {/* Filter Sidebar */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filter
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.icons.webp}
            alt="dropdown icon"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Category</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input className="w-3 h-3" type="checkbox" value="Men" onChange={toggleCategory} />
              Men
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3 h-3" type="checkbox" value="Women" onChange={toggleCategory} />
              Women
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3 h-3" type="checkbox" value="Kids" onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input className="w-3 h-3" type="checkbox" value="topwear" onChange={toggleSubCategory} />
              Topwear
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3 h-3" type="checkbox" value="bottomwear" onChange={toggleSubCategory} />
              Bottomwear
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3 h-3" type="checkbox" value="winterwear" onChange={toggleSubCategory} />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 items-center">
          <Title text1="SHOP" text2="NOW" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 sm:text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="lowToHigh">Sort by: Low to High</option>
            <option value="highToLow">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[96px]">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
