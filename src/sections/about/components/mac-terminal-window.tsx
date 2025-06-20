import React, { useState, useEffect, useRef } from "react";

interface MacTerminalWindowProps {
  children: React.ReactNode;
  title?: string;
}

const MacTerminalWindow: React.FC<MacTerminalWindowProps> = ({
  children,
  title = "german",
}) => {
  const [terminalSize, setTerminalSize] = useState({ cols: 80, rows: 24 });
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateTerminalSize = () => {
      if (terminalRef.current) {
        const rect = terminalRef.current.getBoundingClientRect();
        const charWidth = 8.4;
        const lineHeight = 20;

        const cols = Math.floor(rect.width / charWidth);
        const rows = Math.floor(rect.height / lineHeight);

        setTerminalSize({ cols, rows });
      }
    };

    calculateTerminalSize();

    const resizeObserver = new ResizeObserver(calculateTerminalSize);
    if (terminalRef.current) {
      resizeObserver.observe(terminalRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
      {/* Terminal Container */}
      <div className="bg-white/10 shadow-black/20 shadow-md backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="flex justify-between items-center bg-gray-700/80 backdrop-blur-sm px-4 sm:px-6 py-3 border-gray-600/30 border-b">
          {/* Traffic Light Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="bg-red-400 hover:bg-red-500 rounded-full w-3 sm:w-3.5 h-3 sm:h-3.5 transition-colors cursor-pointer"></div>
            <div className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-3 sm:w-3.5 h-3 sm:h-3.5 transition-colors cursor-pointer"></div>
            <div className="bg-green-400 hover:bg-green-500 rounded-full w-3 sm:w-3.5 h-3 sm:h-3.5 transition-colors cursor-pointer"></div>
          </div>

          {/* Terminal Title */}
          <span className="flex justify-center items-center gap-2 text-gray-100 text-xs sm:text-sm terminal-font">
            <img src="/icons/mac-folder.svg" alt="folder" className="w-4 h-4" />
            {title} — -zsh — {terminalSize.cols}×{terminalSize.rows}
          </span>

          {/* Empty space for grid balance */}
          <div className="w-12 sm:w-16"></div>
        </div>

        {/* Terminal Content */}
        <div ref={terminalRef} className="bg-gray-900/80 backdrop-blur-sm p-6">
          {/* Terminal Command Simulation */}
          <div className="mb-6 text-sm sm:text-base terminal-font">
            <span className="text-green-400 terminal-font">german@about</span>
            <span className="text-white terminal-font">:</span>
            <span className="text-blue-400 terminal-font">~</span>
            <span className="text-white terminal-font">$ </span>
            <span className="text-rose-200 terminal-font">cat about.md</span>
          </div>

          <div className="space-y-4 text-gray-100 terminal-font">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacTerminalWindow;
