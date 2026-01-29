"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews, sold } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300 h-full">
      {/* Image */}
      <figure className="relative h-52">
        <Image src={image} alt={title} fill className="object-cover" />
      </figure>

      {/* Body */}
      <div className="card-body p-4 flex flex-col">
        {/* Title */}
        <h2 className="font-semibold text-base line-clamp-2 min-h-10">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm mt-1">
          <div className="flex items-center text-warning">
            <FaStar />
            <span className="ml-1 font-medium">{ratings}</span>
          </div>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Price + Sold */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {discount > 0 && (
              <span className="line-through text-sm text-gray-500">
                ৳{price}
              </span>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500">
            Sold: <span className="font-semibold text-primary">{sold}</span>
          </p>
          </div> 
        </div>

        {/* Button – ALWAYS bottom */}
        <div className="mt-auto pt-2 space-y-3.5">
          <button className="btn btn-primary btn-sm w-full gap-2 hover:scale-105 transition-all">
            <FaShoppingCart />
            Add to Cart
          </button>

         <Link href={`/products/${_id}`}>
             <button className="btn btn-info btn-sm w-full gap-2 hover:scale-105 transition-all text-white">
            View Details
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
