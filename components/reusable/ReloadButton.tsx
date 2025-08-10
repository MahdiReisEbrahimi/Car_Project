import { RotateCw } from "lucide-react";

interface ReloadButtonProps {
  reloadButtonHandler: () => void;
}
export default function ReloadButton({
  reloadButtonHandler,
}: ReloadButtonProps) {
  return (
    <button
      onClick={reloadButtonHandler}
      type="button"
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black via-gray-700 to-black 
                     text-white rounded-full shadow-lg hover:from-gray-700 hover:via-black hover:to-gray-700 
                     active:scale-90 transition-all duration-200 cursor-pointer border"
    >
      <RotateCw className="w-5 h-5" />
      <span className="font-medium">Reload</span>
    </button>
  );
}
