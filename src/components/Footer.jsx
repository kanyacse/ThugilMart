import assets from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left side: Logo and About text */}
        <div className="flex flex-col items-start md:w-1/3">
          <img src={assets.logos.main} alt="ThugilMart Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-600">
            ThugilMart is a leading e-commerce platform providing a wide range of products from fashion to electronics. We aim to bring the best deals and seamless shopping experience to customers across India.
          </p>
        </div>

        {/* Center: Links */}
        <div className="md:w-1/3 text-center">
          <h3 className="text-lg font-bold mb-3 text-gray-900">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Collection</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Right side: Get in Touch */}
        <div className="md:w-1/3 text-left space-y-6">
          <h3 className="text-lg font-bold mb-3 text-gray-900">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Email: <a href="mailto:support@thugilmart.com" className="hover:text-blue-500">support@thugilmart.com</a></li>
            <li>Phone: <a href="tel:+919876543210" className="hover:text-blue-500">+91 98765 43210</a></li>
            <li>Address: 123 Market Street, Coimbatore, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom text centered */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 ThugilMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
