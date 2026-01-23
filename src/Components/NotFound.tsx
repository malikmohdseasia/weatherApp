import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-gray-800">
          404
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-600">
          Oops! Page not found
        </p>

        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-black text-white font-semibold
                     hover:bg-gray-800 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
