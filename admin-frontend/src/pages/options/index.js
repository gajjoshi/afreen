// pages/options.js

import Link from "next/link";
import Router from "next/router";

export default function Options() {
  const handleLogout = () => {
    // Handle logout logic here (if applicable)
    Router.push("/login"); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Options</h1>
      <div className="flex gap-4">
        {/* Job Listings Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Job Listings</h2>
          <p className="text-gray-600 mb-4">View and manage job listings.</p>
          <Link href="/jobs">
            <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              View Jobs
            </button>
          </Link>
        </div>

        {/* User Details Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">User Details</h2>
          <p className="text-gray-600 mb-4">View and manage user details.</p>
          <div className="flex gap-2">
            <Link href="/candidates">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                View Candidates
              </button>
            </Link>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Manage Details
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
