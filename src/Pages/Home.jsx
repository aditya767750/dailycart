import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

const Home = ({cart,setCart,count,setCount}) => {

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col gap-8 mt-30">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl text-[#081F4B] font-bold ">
            Welcome to DailyCart
          </h1>

          <p className="text-xl text-center text-gray-500">
            Discover the latest gadgets, fashion, and accessories.
          </p>
          
        </div>
        <div className="w-[50%] ">
          <input
            type="text"
            className="w-full focus:ring-12 focus:ring-[#081F4B] px-4 text-xl font-medium py-3 rounded-xl border-2 border-[#081F4B] outline-none"
            placeholder="Search products..."
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <ProductCard cart={cart} setCart={setCart} count ={count} setCount={setCount}/>
</div>
    </>
  );
};

export default Home;
