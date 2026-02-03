import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-base-100">
      
      {/* Icon */}
      <div className="text-error text-6xl mb-6 animate-bounce">
        <FaExclamationTriangle />
      </div>

      {/* Text */}
      <h1 className="text-5xl text-primary font-bold mb-2">404</h1>
      <h2 className="text-3xl font-semibold mb-3">
        Page Not Found
      </h2>
      <p className="text-gray-700 max-w-md mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="btn btn-primary px-8 gap-2">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
