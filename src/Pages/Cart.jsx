import React from "react";

import { products } from "../data/product";
const Cart = ({cart}) => {

  return (
    <>
      <div className="w-full min-h-[calc(100vh-84px)]  flex text-[#081F4B]">
        <div className="w-[60%] flex flex-col  gap-2 px-16 py-8  mt-25">
          {
            cart.map((item)=>(
              <div className="flex items-center gap-4 border w-150  rounded-3xl">
            <img
              src={item.image}
              alt=""
              className="h-20 aspect-square object-cover mix-blend-color-burn"
            />
            <p className="line-clamp-2">{item.name}</p>
            <div className="px-4 flex items-center gap-4 bg-amber-100 rounded-xl py-2">
              <button className="cursor-pointer text-xl font-medium">−</button>
              <span>12</span>
              <button className="cursor-pointer text-xl font-medium">+</button>
            </div>
            <div className="flex gap-8 items-center">
              <span>₹ {item.price}</span>
              <button className="bg-red-400 px-4 py-2 rounded-xl">
                remove
              </button>
            </div>
          </div>
            ))
          }
          
        </div>

        <div className="w-[40%] flex justify-center text-[#081F4B]  ">

            <div className="w-100 border h-80 px-8 py-8 rounded-xl mt-35 flex flex-col ">
            <h2 className="text-center text-xl font-medium mt-2 mb-4">Summary Order</h2>
              <div className="flex justify-between">
                <p className="text-lg font-medium ">Subtotal</p>
                <p className="text-lg font-medium ">₹2300</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-ligth ">Shipping</p>
                <p className="text-lg font-ligth ">₹40</p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-xl font-medium ">Total</p>
                <p className="text-xl font-medium ">₹2370</p>
              </div>
              <button className="w-full bg-amber-400 py-3 mt-8 active:scale-99 cursor-pointer rounded text font-medium text-[#081F4B]">Check Out</button>
            </div>

        </div>
      </div>
    </>
  );
};

export default Cart;
