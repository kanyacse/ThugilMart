import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle subcategory
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // ✅ FILTER FUNCTION
  const applyFilter = () => {
    let productsCopy = [...products];

    // 🔥 SEARCH FILTER
    if (search && search.trim() !== '') {
      const searchValue = search.toLowerCase().trim();

      productsCopy = productsCopy.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue)
      );
    }

    // CATEGORY FILTER
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // SUBCATEGORY FILTER
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // SORTING
    if (sortType === 'lowToHigh') {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'highToLow') {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [products, search, category, subCategory, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t">

      {/* Sidebar */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-xl cursor-pointer mb-4"
        >
          Filter
        </p>

        <div className={`${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="font-semibold">Category</p>
          <label><input type="checkbox" value="Men" onChange={toggleCategory}/> Men</label><br/>
          <label><input type="checkbox" value="Women" onChange={toggleCategory}/> Women</label>
        </div>

        <div className={`${showFilter ? '' : 'hidden'} sm:block mt-4`}>
          <p className="font-semibold">SubCategory</p>
          <label><input type="checkbox" value="topwear" onChange={toggleSubCategory}/> Topwear</label><br/>
          <label><input type="checkbox" value="bottomwear" onChange={toggleSubCategory}/> Bottomwear</label>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">
        <div className="flex justify-between mb-4">
          <Title text1="SHOP" text2="NOW" />

          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="relevant">Relevant</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;