const LoadingSpinner = () => (
  <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-80 z-50">
    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
      <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 sm:border-5 border-t-4 sm:border-t-5 border-gray-300 border-opacity-50 rounded-full animate-spin relative">
        <div className="absolute inset-0 rounded-full border-t-4 border-blue-900 border-opacity-50"></div>
      </div>
      <div className="text-xl sm:text-3xl font-semibold text-black">Page Loading...</div>
    </div>
  </div>
);

export default LoadingSpinner;
