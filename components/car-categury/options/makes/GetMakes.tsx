"use client";

import PrintMakes from "./PrintMakes";
import { useGetAndSaveMakes } from "@/hooks/useGetAndSaveMakes";
import { useState } from "react";

export default function GetMakes() {
  const { error, makes, isLoading } = useGetAndSaveMakes();
  const [page, setPage] = useState(1); // Track current page
  const itemsPerPage = 52;

  // Split into chunks
  const totalPages = Math.ceil((makes?.length || 0) / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = makes?.slice(startIndex, endIndex);

  return (
    <div>
      {/* Items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 border rounded-2xl p-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          currentItems?.map(
            (make) =>
              make.Make_Name !== null && (
                <PrintMakes key={make.Make_ID} make={make} />
              )
          )
        )}
      </div>

      {/* Pagination */}
      <div className="flex m-auto rounded-lg p-3 max-w-fit overflow-auto justify-center gap-3 mt-6 bg-black/40 backdrop-blur-md shadow-lg">
        {/* first page */}
        {page !== 1 && (
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className={`px-4 cursor-pointer py-1.5 rounded-full text-sm font-medium transition-all duration-200 
      ${
        page === 1
          ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
          : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
      }`}
          >
            First
          </button>
        )}

        {/* Prev Button */}
        {page !== 1 && (
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className={`px-4 cursor-pointer py-1.5 rounded-full text-sm font-medium transition-all duration-200 
      ${
        page === 1
          ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
          : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
      }`}
          >
            Prev
          </button>
        )}

        {/* Current Page */}
        <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-500 text-white shadow-md">
          {page}
        </span>

        {/* Next Button */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 cursor-pointer py-1.5 rounded-full text-sm font-medium transition-all duration-200 
      ${
        page === totalPages
          ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
          : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
      }`}
        >
          Next
        </button>
        {/* Last Page Button */}
        {page !== totalPages && (
          <button
            onClick={() => setPage(totalPages)}
            className="px-4 cursor-pointer py-1.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
          >
            Last ({totalPages})
          </button>
        )}
      </div>
    </div>
  );
}
