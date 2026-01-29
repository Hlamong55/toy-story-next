"use server";

import { dbconnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
    const products = await dbconnect("products").find().toArray();
    return products;
};


export const getSingleProduct = async (id) => {
    if (id.length != 24) {
        return {};
    }
    const query = { _id: new ObjectId(id) };

    const product = await dbconnect("products").findOne(query);

    return product || {};
};