import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md animate-pulse">
      {/* Image skeleton */}
      <div className="h-52 w-full bg-gray-300 rounded-t-xl"></div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-5 w-1/2 bg-gray-300 rounded"></div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-1">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-14 bg-gray-300 rounded"></div>
        </div>

        {/* Price + Sold */}
        <div className="flex items-center justify-between mt-2">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="mt-auto space-y-2 pt-3">
          <div className="h-9 w-full bg-gray-300 rounded"></div>
          <div className="h-9 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
