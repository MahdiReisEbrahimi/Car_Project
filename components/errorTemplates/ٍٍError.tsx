import { AlertTriangle } from "lucide-react";

interface ErrorProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export default function Error({
  title = "Oops! An Error Occurred",
  message = "Something went wrong. Please try again later.",
  icon,
}: ErrorProps) {
  return (
    <div className="w-full max-w-md mx-auto mt-10 px-4 py-6 bg-red-50 border border-red-200 rounded-xl shadow-sm flex flex-col items-center text-center">
      <div className="text-red-500 mb-3">
        {icon || <AlertTriangle className="w-10 h-10" color="red" />}
      </div>
      <h2 className="text-lg font-bold text-red-500 mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}
