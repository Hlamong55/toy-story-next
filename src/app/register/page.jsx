"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/20 via-base-200 to-secondary/20 px-4">
      
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2">Create Account 🚀</h1>
        <p className="text-center text-gray-600 mb-6">
          Join <span className="text-primary font-semibold">Toy Story</span> today
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer input input-bordered w-full bg-transparent"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer input input-bordered w-full bg-transparent"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Last Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder=" "
              className="peer input input-bordered w-full bg-transparent"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder=" "
              className="peer input input-bordered w-full bg-transparent pr-10"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-4 text-gray-500"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder=" "
              className="peer input input-bordered w-full bg-transparent pr-10"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Confirm Password
            </label>

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-4 text-gray-500"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="text-sm text-gray-600">Remember me</span>
          </div>

          {/* Register Button */}
          <button className="btn btn-primary w-full text-lg">
            Register
          </button>
        </form>

        {/* Login Toggle */}
        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
