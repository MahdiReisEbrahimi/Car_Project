interface LoadingProps {
  message?: string;
}

export default function LoadingSpinner({ message = "Loading..." }: LoadingProps) {
  return (
    <div className="flex items-center justify-center p-6 bg-white shadow-lg rounded-lg min-w-[220px] min-h-[80px] space-x-4 mt-2">
      {/* متن پیام */}
      <span className="text-gray-800 font-semibold text-lg select-none">{message}</span>

      <svg
        className="animate-spin h-5 w-5 text-pink-600"
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
