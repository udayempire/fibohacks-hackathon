export const Stepper = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto my-8">
      {/* Step 1 */}
      <div className="flex-1 flex items-center">
        <div className="relative">
          <div className="rounded-full w-6 h-6 bg-indigo-600 text-white flex items-center justify-center text-sm">
            1
          </div>
          <p className="text-sm text-center mt-2 text-gray-800">Edit</p>
        </div>
        <div className="flex-1 h-0.5 bg-indigo-600"></div>
      </div>

      {/* Step 2 */}
      <div className="flex-1 flex items-center">
        <div className="relative">
          <div className="rounded-full w-6 h-6 bg-gray-300 text-gray-500 flex items-center justify-center text-sm">
            2
          </div>
          <p className="text-sm text-center mt-2 text-gray-500">Banner</p>
        </div>
        <div className="flex-1 h-0.5 bg-gray-300"></div>
      </div>

      {/* Step 3 */}
      <div className="flex-1 flex items-center">
        <div className="relative">
          <div className="rounded-full w-6 h-6 bg-gray-300 text-gray-500 flex items-center justify-center text-sm">
            3
          </div>
          <p className="text-sm text-center mt-2 text-gray-500">Ticketing</p>
        </div>
        <div className="flex-1 h-0.5 bg-gray-300"></div>
      </div>

      {/* Step 4 */}
      <div className="flex-1 flex items-center">
        <div className="relative">
          <div className="rounded-full w-6 h-6 bg-gray-300 text-gray-500 flex items-center justify-center text-sm">
            4
          </div>
          <p className="text-sm text-center mt-2 text-gray-500">Review</p>
        </div>
      </div>
    </div>
  );
};
