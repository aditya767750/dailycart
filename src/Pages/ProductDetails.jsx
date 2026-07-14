import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold">Product Not Found 😔</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-20">
      <button
        onClick={() => navigate(1)}
        className="mb-8 px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div className="bg-amber-50 rounded-2xl p-8 shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-contain mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-5">

          <span className="bg-green-100 text-green-700 w-fit px-4 py-1 rounded-full">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-[#081F4B]">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="text-gray-500">
              (4.8 Rating)
            </span>
          </div>

          <h2 className="text-4xl font-bold text-[#FD6100]">
            ₹ {product.price}
          </h2>

          <p className="text-gray-600 leading-8">
            {product.description}
          </p>

          <div className="flex gap-5 mt-6">

            <button className="bg-[#081F4B] text-white px-8 py-3 rounded-xl hover:bg-[#0B2C6D] transition-all duration-300 active:scale-95">
              Add to Cart
            </button>

            <button className="border-2 border-[#081F4B] text-[#081F4B] px-8 py-3 rounded-xl hover:bg-[#081F4B] hover:text-white transition-all duration-300 active:scale-95">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;