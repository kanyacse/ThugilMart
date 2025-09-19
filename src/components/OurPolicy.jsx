import assets from '../assets/assets.js';  // Import assets 

const OurPolicy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10 px-4 text-xs sm:text-sm md:text-base text-gray-700 text-center">
      
      <div className="flex flex-col items-center h-full min-h-[180px]">
        <img src={assets.icons.exchangeicon} className="w-10 h-10 object-contain mb-3" alt="Exchange Icon" />
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-400">7 days return policy</p>
      </div>

      <div className="flex flex-col items-center h-full min-h-[180px]">
        <img src={assets.icons.deliceryicon} className="w-10 h-10 object-contain mb-3" alt="Delivery Icon" />
        <p className="font-semibold">Fast Delivery</p>
        <p className="text-gray-400">3-5 days delivery</p>
      </div>

      <div className="flex flex-col items-center h-full min-h-[180px]">
        <img src={assets.icons.supporticon} className="w-10 h-10 object-contain mb-3" alt="Support Icon" />
        <p className="font-semibold">24/7 Support</p>
        <p className="text-gray-400">Always ready to help</p>
      </div>

      <div className="flex flex-col items-center h-full min-h-[180px]">
        <img src={assets.icons.securityicon} className="w-10 h-10 object-contain mb-3" alt="Security Icon" />
        <p className="font-semibold">Secure Payment</p>
        <p className="text-gray-400">Encrypted transactions</p>
      </div>

    </div>
  );
}

export default OurPolicy;
