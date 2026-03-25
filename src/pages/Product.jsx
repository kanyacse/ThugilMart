import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [message, setMessage] = useState('');

  // ✅ Fetch product
  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === productId
    );

    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage("⚠️ Please select a size");
      return;
    }

    addToCart(productData._id); // later you can add size also
    setMessage("✅ 1 item added to cart");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return productData ? (
    <div className="border-t-2 pt-20 px-5 max-w-6xl mx-auto">

      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => navigate('/')}
        className="mb-5 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Back to Home
      </button>

      <div className="flex gap-12 flex-col sm:flex-row">

        {/* ✅ LEFT SIDE - Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">

          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:w-[20%] gap-2">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover cursor-pointer border rounded ${
                  image === item ? "border-black" : ""
                }`}
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              className="w-full h-auto object-cover rounded"
              alt=""
            />
          </div>
        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="flex-1">

          <h1 className="text-2xl font-semibold">
            {productData.name}
          </h1>

          <p className="mt-2 text-gray-600">
            {productData.description}
          </p>

          <p className="mt-4 text-xl font-bold">
            ₹{productData.price}
          </p>

          {/* ✅ SIZE SELECT */}
          <div className="mt-6">
            <p className="mb-2 font-medium">Select Size</p>

            <div className="flex gap-2">
              {productData.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded 
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ MESSAGE */}
          {message && (
            <p className="mt-4 text-green-600 font-medium">
              {message}
            </p>
          )}

          {/* ✅ ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-20">Loading...</div>
  );
};

export default Product;