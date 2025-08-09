interface LoadingProps {
  message?: string;
}

export default function LoadingSpinner({
  message = "Loading...",
}: LoadingProps) {
  return (
    <div className="m-auto flex items-center justify-center p-6 bg-gray-400 shadow-lg rounded-lg min-w-[220px] min-h-[80px] space-x-4 mt-2">
      <span className="text-black font-semibold text-lg select-none">
        {message}
      </span>

      <svg
        className="animate-spin h-5 w-5 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>
  );
}
