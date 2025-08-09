import { AlertTriangle } from "lucide-react";

interface ErrorProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export default function Error({
  title = "Oops! Something Went Wrong",
  message = "Please check your internet connection or try again later.",
  icon,
}: ErrorProps) {
  return (
    <div className="mx-auto max-w-md border-2 mt-12 px-8 py-8 bg-gradient-to-r from-black via-gray-700 to-black rounded-2xl shadow-xl flex flex-col items-center text-center text-white">
      <div className="mb-4">
        {icon || <AlertTriangle className="w-14 h-14 text-red-500 animate-pulse" />}
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-300">{message}</p>
    </div>
  );
}
