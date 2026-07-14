import React, { useState } from "react";

import { products } from "../data/product";

const ProductCard = ({cart,setCart,count,setCount}) => {
  function addCart(index){
    
    const data = [...cart,products[index]]
    setCart(data)
    setCount(count+1)
    console.log(data);
    
  }

  return (
    <>
      {products.map((item, index) => (
        <div
          key={index}
         className="w-full max-w-sm mx-auto h-[430px] bg-amber-50 flex flex-col rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
          <div className=" rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full mix-blend-multiply h-52 object-cover rounded-lg aspect-square"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 mt-3">
            <span className="bg-green-100 px-4 py-1 w-20 rounded-xl">
              {item.category}
            </span>
            <h3 className="font-semibold line-clamp-2">{item.name}</h3>
            <h3>₹ {item.price}</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer"
              
              onClick={()=>addCart(index)}
            >
              Add to Cart
            </button>

            <button onClick={() => navigate(`/product/${item.id}`)} className="border px-4 py-2 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer">
              View Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
