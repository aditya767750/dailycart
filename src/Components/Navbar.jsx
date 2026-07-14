import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({count}) => {

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white flex justify-between items-center px-6  z-150  md:px-20">
      {/* Logo */}
      
        <div className="flex items-center gap-2">
          <ShoppingCart size={35} className="text-[#FD6100]" />

          <h2 className="text-3xl font-bold">
            <span className="text-[#081F4B]">Daily</span>
            <span className="text-[#FD6100]">Cart</span>
          </h2>
        </div>
    

      {/* Cart */}
      <Link to='/cart'>
        <div className="w-12 h-12 rounded-full bg-amber-50 flex justify-center items-center relative hover:scale-105 transition-all duration-300">
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold  flex justify-center items-center">
            {count}
          </span>

          <ShoppingCart
            size={24}
            className="text-[#FD6100] cursor-pointer"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;