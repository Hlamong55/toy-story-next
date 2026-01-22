import React from "react";
import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";

const Products = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-5xl font-bold mb-10">Our Products</h2>

      <div className="grid md:grid-cols-4 gap-7">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
