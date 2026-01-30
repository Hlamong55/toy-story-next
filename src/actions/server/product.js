"use server";

import { dbconnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const PRODUCT_COLLECTION = "products";

/* =========================
   GET ALL PRODUCTS
========================= */
export const getProducts = async () => {
  const collection = dbconnect(PRODUCT_COLLECTION);
  const products = await collection.find().toArray();


  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));
};

/* =========================
   GET SINGLE PRODUCT
========================= */
export const getProductById = async (id) => {
  const collection = dbconnect(PRODUCT_COLLECTION);

  const product = await collection.findOne({
    _id: new ObjectId(id),
  });

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(), 
  };
};
