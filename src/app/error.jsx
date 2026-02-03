"use client"

import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <div className="text-error text-6xl mb-6 animate-bounce">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-4xl text-primary font-bold mb-2">Something went wrong</h1>

      <Link href="/">
        <button className="btn btn-primary px-8 gap-2">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default error;
