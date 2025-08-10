"use client";
import PrintMakes from "./PrintMakes";
import { useGetAndSaveMakes } from "@/hooks/useGetAndSaveMakes";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentMakesPage } from "@/store/slices/CarFilterReducer";
import { Make } from "@/types";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";
import Error from "@/components/errorTemplates/Error";
import ReloadButton from "@/components/reusable/ReloadButton";

export default function GetMakes() {
  const { isFetching, error, refetch } = useGetAndSaveMakes();
  const dispatch = useDispatch();

  const makes = useSelector((state: any) => state.carFilter.filteredMakes);
  const page = useSelector((state: any) => state.carFilter.currentMakesPage);
  const itemsPerPage = 20;

  const totalPages = Math.ceil((makes?.length || 0) / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems: Make[] = makes?.slice(startIndex, endIndex) || [];

  function reloadButtonHandler() {
    refetch();
  }

  return (
    <div>
      {isFetching ? (
        <LoadingSpinner message="Fetching Makes" />
      ) : error ? (
        <div className="flex flex-col items-center gap-8">
          <Error />
          <ReloadButton reloadButtonHandler={reloadButtonHandler} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 border rounded-2xl p-4">
            {currentItems.map(
              (make) =>
                make.Make_Name !== null && (
                  <PrintMakes key={make.Make_ID} make={make} />
                )
            )}
          </div>

          {/* Pagination */}
          <div className="flex m-auto rounded-lg p-3 max-w-fit overflow-auto justify-center gap-3 mt-6 bg-black/40 backdrop-blur-md shadow-lg">
            {page !== 1 && (
              <button
                onClick={() => dispatch(setCurrentMakesPage(1))}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 hover:scale-105"
              >
                First
              </button>
            )}
            {page !== 1 && (
              <button
                onClick={() => dispatch(setCurrentMakesPage(page - 1))}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 hover:scale-105"
              >
                Prev
              </button>
            )}
            <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-500 text-white shadow-md">
              {page}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => dispatch(setCurrentMakesPage(page + 1))}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 hover:scale-105 disabled:opacity-50"
            >
              Next
            </button>
            {page !== totalPages && (
              <button
                onClick={() => dispatch(setCurrentMakesPage(totalPages))}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 hover:scale-105"
              >
                Last ({totalPages})
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
