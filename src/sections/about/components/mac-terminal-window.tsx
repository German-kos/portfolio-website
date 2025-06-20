import React from "react";

interface MacTerminalWindowProps {
  children: React.ReactNode;
  title?: string;
}

const MacTerminalWindow: React.FC<MacTerminalWindowProps> = ({
  children,
  title = "german@about:~$",
}) => {
  return (
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
      {/* Terminal Container */}
      <div className="bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="flex justify-between items-center bg-gray-200 px-4 sm:px-6 py-3 sm:py-4 border-gray-300 border-b">
          {/* Traffic Light Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="bg-red-400 hover:bg-red-500 rounded-full w-3 sm:w-3.5 h-3 sm:h-3.5 transition-colors cursor-pointer"></div>
            <div className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-3 sm:w-3.5 h-3 sm:h-3.5 transition-colors cursor-pointer"></div>
            <div className="bg-green-400 hover:bg-green-500 rounded-full w-3 sm:w-3.5 h-3 sm:h-3.5 transition-colors cursor-pointer"></div>
          </div>

          {/* Terminal Title */}
          <div className="flex-1 text-center">
            <span className="text-gray-800 text-xs sm:text-sm terminal-font">
              {title}
            </span>
          </div>

          {/* Empty space for balance */}
          <div className="w-12 sm:w-16"></div>
        </div>

        {/* Terminal Content */}
        <div className="bg-gray-900/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
          {/* Terminal Prompt Line */}
          <div className="mb-6 text-sm sm:text-base terminal-font">
            <span className="text-purple-300 terminal-font">german@about</span>
            <span className="text-white terminal-font">:</span>
            <span className="text-pink-300 terminal-font">~</span>
            <span className="text-white terminal-font">$ </span>
            <span className="text-rose-200 terminal-font">cat about.md</span>
          </div>

          {/* Terminal Output */}
          <div className="space-y-4 text-gray-100">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MacTerminalWindow;
