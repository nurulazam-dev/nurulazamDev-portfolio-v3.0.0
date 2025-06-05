"use client";
import { useEffect, useState } from "react";

export default function NoInternet() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const updateStatus = () => setOffline(!navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    updateStatus();
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md">
      <svg
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
        className="mb-6 text-red-400"
      >
        <path
          d="M1 1l22 22M16.72 11.06A6 6 0 0 0 12 9a6 6 0 0 0-6 6m13.31 3.31A10 10 0 0 0 2.69 7.69"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <h2 className="text-2xl font-bold text-red-500 mb-2">
        No Internet Connection
      </h2>
      <p className="text-gray-600 mb-4 text-center max-w-xs">
        This site can’t be reached. Please check your internet connection and
        try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
      >
        Retry
      </button>
    </div>
  );
}
