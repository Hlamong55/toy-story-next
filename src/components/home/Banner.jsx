import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
      <div className="flex-1 px-5 text-center space-y-6">
        <h2 className={`${fontBangla.className} text-5xl md:text-6xl font-extrabold leading-15`}>
          আপনার শিশুকে দিন একটি <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
        </h2>
        <p className="text-xl font-semibold">Buy Every Toy with up to 15% Discount</p>
        <button className="btn btn-primary btn-outline">Explore Products</button>
      </div>

      <div className="flex-1">
        <Image 
        src={"/assets/hero.png"}
        alt="Toy Story Banner"
        width={700} height={400} ></Image>
      </div>
    </div>
  );
};

export default Banner;
