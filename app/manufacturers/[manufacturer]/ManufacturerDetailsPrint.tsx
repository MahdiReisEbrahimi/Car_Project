interface ManufacturerDetailsPrintParams {
  mfr_name: string;
  availableCarLength: number;
  contactEmail: string;
  contactPhone: string;
  address: string;
  country: string;
  city: string;
}

export default function ManufacturerDetailsPrint({
  mfr_name,
  availableCarLength,
  contactEmail,
  contactPhone,
  address,
  country,
  city,
}: ManufacturerDetailsPrintParams) {
  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          {mfr_name}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-pink-600">
            {mfr_name}
          </span>{" "}
          is one of the
          <span className="font-semibold text-pink-600">
            {" "}
            biggest car manufacturers{" "}
          </span>
          in the world — known for innovation and performance across various
          models.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-center">
        <div className="bg-white shadow rounded-xl p-5">
          <div className="text-pink-600 text-2xl font-bold">
            {availableCarLength}
          </div>
          <div className="text-gray-500 mt-1">Cars Available</div>
        </div>
        <div className="bg-white shadow rounded-xl p-5">
          <div className="text-pink-600 text-lg font-semibold">
            {city}
          </div>
          <div className="text-gray-500 mt-1">City</div>
        </div>
        <div className="bg-white shadow rounded-xl p-5">
          <div className="text-pink-600 text-lg font-semibold">
            {country}
          </div>
          <div className="text-gray-500 mt-1">Country</div>
        </div>
      </div>

      {/* Contact & Address Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
          <div className="text-sm text-gray-500 mb-1">📍 Address</div>
          <div className="text-gray-800 font-medium">
            {address}
          </div>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
          <div className="text-sm text-gray-500 mb-1">☎️ Contact Phone</div>
          <div className="text-gray-800 font-medium">
            {contactPhone}
          </div>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl shadow-sm sm:col-span-2">
          <div className="text-sm text-gray-500 mb-1">📧 Contact Email</div>
          <div className="text-gray-800 font-medium break-words">
            {contactEmail}
          </div>
        </div>
      </div>
    </div>
  );
}
