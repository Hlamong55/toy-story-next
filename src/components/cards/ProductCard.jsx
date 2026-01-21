"use client";

import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <figure className="relative h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {discount > 0 && (
          <span className="badge badge-error text-white absolute top-3 left-3">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-warning">
            <FaStar />
            <span className="ml-1 font-medium">{ratings}</span>
          </div>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: <span className="font-medium">{sold}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary btn-sm w-full gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
