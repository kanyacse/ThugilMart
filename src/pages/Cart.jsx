import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { loadStripe } from "@stripe/stripe-js";

// 🔑 Use your Stripe Test Publishable Key
const stripePromise = loadStripe("pk_test_your_test_key_here");

const Cart = () => {
  const { cartItems, products, removeFromCart } = useContext(ShopContext);

  // Calculate Total Price
  const total = Object.entries(cartItems).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p._id === id);
    return product ? sum + product.price * qty : sum;
  }, 0);

  // ✅ Stripe Checkout Handler
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const lineItems = Object.entries(cartItems).map(([id, qty]) => {
      const product = products.find((p) => p._id === id);
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100, // Stripe uses smallest currency unit (paise)
        },
        quantity: qty,
      };
    });

    const result = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: window.location.origin + "/success",
      cancelUrl: window.location.origin + "/cart",
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {Object.keys(cartItems).length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {Object.entries(cartItems).map(([id, qty]) => {
            const product = products.find((p) => p._id === id);
            if (!product) return null;

            return (
              <div
                key={id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-gray-500">₹{product.price}</p>
                    <p className="text-sm">Qty: {qty}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            );
          })}

          {/* Total + Checkout */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>

            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Pay with Stripe
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;