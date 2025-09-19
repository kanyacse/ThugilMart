const NewsLetterBox = () => {

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the page from reloading

    const email = e.target.email.value;  // Get the email input's value
    console.log('Email submitted:', email); // You can replace this with API call

    e.target.reset();  // Clear the form input after submission
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-3">Subscribe & Save!</h3>
      <p className="text-gray-600 mb-6">
        Get the latest fashion trends, special offers, and exclusive deals delivered straight to your inbox.
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          required
        />
        <button
          type="submit"
          className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Subscribe Now
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsLetterBox;
