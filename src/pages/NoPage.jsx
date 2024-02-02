import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Oops... URL path is wrong</h2>
      <p className="text-lg mb-4">Navigate to the root page?</p>
      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Browse back
        </button>
      </Link>
    </div>
  );
}
