import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        About ThugilMart
      </h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Your trusted online shopping destination for quality products and
        unbeatable deals across India.
      </p>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
          alt="shopping"
          className="rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            ThugilMart is a growing e-commerce platform offering a wide range of
            products including fashion, electronics, and everyday essentials. We
            aim to bring convenience, variety, and affordability together in one
            place.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make online shopping simple, reliable, and
            accessible for everyone. We strive to deliver high-quality products
            at the best prices while ensuring customer satisfaction at every
            step.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
          alt="mission"
          className="rounded-2xl shadow-md"
        />
      </div>

      {/* Features */}
      <div className="bg-gray-50 p-8 rounded-2xl mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h3 className="font-semibold mb-2">Wide Collection</h3>
            <p className="text-gray-600 text-sm">
              Fashion, electronics, and daily essentials all in one place.
            </p>
          </div>

          <div className="p-4">
            <h3 className="font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">
              Affordable pricing with exciting deals and offers.
            </p>
          </div>

          <div className="p-4">
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Reliable and quick delivery across India.
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          We envision becoming one of India’s leading e-commerce platforms by
          continuously improving our services, expanding our product range, and
          putting customers first.
        </p>
      </div>

    </div>
  );
};

export default About;