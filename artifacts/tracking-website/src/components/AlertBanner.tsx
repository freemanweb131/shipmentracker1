import { Info } from "lucide-react";

export default function AlertBanner() {
  return (
    <div className="border border-blue-200 bg-white mx-4 md:mx-8 lg:mx-16 my-4 px-4 py-3 flex items-center gap-3 text-sm">
      <Info size={18} className="text-blue-600 flex-shrink-0" />
      <span className="text-gray-700">
        US Supreme Court Tariff Update.{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          See how this may impact you
        </a>
        .
      </span>
    </div>
  );
}
