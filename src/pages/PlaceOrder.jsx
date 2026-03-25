// src/pages/PlaceOrder.jsx
import React, { useState } from 'react';

const PlaceOrder = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    alert("Order Placed Successfully 🎉");
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Place Order</h1>

      <input
        name="name"
        placeholder="Full Name"
        className="w-full border p-2 mb-3"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-2 mb-3"
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        className="w-full border p-2 mb-3"
        onChange={handleChange}
      />

      <button
        onClick={handleOrder}
        className="w-full bg-black text-white py-2"
      >
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;