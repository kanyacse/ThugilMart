import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    console.log(formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-500 mb-10">
        We’re here to help! Reach out to ThugilMart for any questions or support.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - Info */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

          <p className="mb-2">
            <span className="font-medium">Email:</span> support@thugilmart.com
          </p>
          <p className="mb-2">
            <span className="font-medium">Phone:</span> +91 98765 43210
          </p>
          <p className="mb-4">
            <span className="font-medium">Address:</span> 123 Market Street, Coimbatore, India
          </p>

          <h3 className="font-semibold mt-4">Support Hours</h3>
          <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
          <p className="text-gray-600">Sat: 10 AM - 4 PM</p>
          <p className="text-gray-600">Sun: Closed</p>
        </div>

        {/* Right - Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send Message</h2>

          {submitted && (
            <p className="text-green-600 mb-4">
              Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;