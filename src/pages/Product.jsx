// src/pages/Product.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams(); 
  const { products } = useContext(ShopContext); 
  const [productData, setProductData] = useState(null); 
  const [imageLoaded, setImageLoaded] = useState(false); // for image loading

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <h1>{productData.name}</h1>

      {!imageLoaded && <p>Loading image...</p>} {/* Show loading text until image loads */}

      <img
        src={productData.image}
        alt={productData.name}
        style={{ width: '300px', display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => setImageLoaded(true)} // When image loads, set true
        onError={() => setImageLoaded(true)} // To handle broken image
      />

      <p>{productData.description}</p>
      <p>Price: ${productData.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
