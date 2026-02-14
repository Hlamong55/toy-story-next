"use client"

import { useRouter } from "next/navigation";

const CartButton = ({ product }) => {
    const isLogin = false;
    const router = useRouter();

    const add2Cart = () => {
        if (isLogin) alert(product._id);
    }
    return (
        <div>
            <button onClick={add2Cart} className="btn btn-primary px-12">Add to Cart</button>
        </div>
    );
};

export default CartButton;