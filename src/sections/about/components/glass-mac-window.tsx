const GlassMacWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
      {/* Window Container */}
      <div className="bg-white/20 shadow-2xl shadow-black/10 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl overflow-hidden">
        {/* MacOS Title Bar */}
        <div className="flex justify-between items-center bg-white/10 px-4 sm:px-6 py-4 sm:py-5 border-white/20 border-b">
          {/* Traffic Light Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="bg-red-500 rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
            <div className="bg-yellow-500 rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
            <div className="bg-green-500 rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
          </div>

          {/* Window Title */}
          <div className="flex-1 text-center">
            <span className="font-medium text-gray-700 text-xs sm:text-sm">
              About - German Kostiakov
            </span>
          </div>

          {/* Empty space for balance */}
          <div className="w-12 sm:w-16"></div>
        </div>

        {/* Window Content */}
        <div className="p-10 sm:p-22 lg:p-26">{children}</div>
      </div>
    </div>
  );
};

export default GlassMacWindow;
