"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 via-base-200 to-secondary/10 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back 👋</h1>
        <p className="text-center text-gray-500 mb-6">
          Login to continue your <span className="text-primary font-semibold">Toy Story</span>
        </p>

        {/* FORM */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label flex justify-between">
              <span className="label-text font-medium">Password</span>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot?
              </Link>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full text-lg">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google Login */}
        <button className="btn btn-outline w-full flex items-center gap-2">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Register Toggle */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
