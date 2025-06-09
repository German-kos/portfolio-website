import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Symbol {
  id: string;
  symbol: string;
  angle: number;
  distance: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
  type: "radial" | "left" | "right";
  createdAt?: number;
  isRemoving?: boolean;
}

const SymbolsBackground = () => {
  const [symbols, setSymbols] = useState<Symbol[]>([]);

  useEffect(() => {
    const codeSymbols = [
      "{}",
      "<>",
      "[]",
      "()",
      "//",
      "&&",
      "||",
      "=>",
      "!=",
      "==",
      "++",
      "--",
      "??",
      "...",
      "/*",
      "*/",
      "<-",
      "->",
      "===",
      "!==",
      "+=",
      "-=",
      "*=",
      "/=",
    ];

    const getSymbolSize = () => {
      const sizeType = Math.random();
      if (sizeType < 0.2) {
        return 10 + Math.random() * 2;
      } else if (sizeType < 0.7) {
        return 14 + Math.random() * 6;
      } else {
        return 20 + Math.random() * 6;
      }
    };

    const createRadialSymbol = (): Symbol => {
      let angle = Math.random() * 360;

      if ((angle > 45 && angle < 135) || (angle > 225 && angle < 315)) {
        if (Math.random() < 0.6) {
          if (angle > 45 && angle < 135) {
            angle =
              Math.random() < 0.5
                ? 45 + Math.random() * 30
                : 105 + Math.random() * 30;
          } else {
            angle =
              Math.random() < 0.5
                ? 225 + Math.random() * 30
                : 285 + Math.random() * 30;
          }
        }
      }

      return {
        id: Math.random().toString(36).substr(2, 9),
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        angle: angle,
        distance: 500 + Math.random() * 400,
        duration: 5 + Math.random() * 4,
        delay: Math.random() * 2,
        size: getSymbolSize(),
        opacity: 0.3 + Math.random() * 0.4,
        type: "radial",
      };
    };

    const createLeftSymbol = (): Symbol => ({
      id: Math.random().toString(36).substr(2, 9),
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      angle: 90 + Math.random() * 180,
      distance: 600 + Math.random() * 300,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 2,
      size: getSymbolSize(),
      opacity: 0.3 + Math.random() * 0.4,
      type: "left",
    });

    const createRightSymbol = (): Symbol => ({
      id: Math.random().toString(36).substr(2, 9),
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      angle: (270 + Math.random() * 180) % 360,
      distance: 600 + Math.random() * 300,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 2,
      size: getSymbolSize(),
      opacity: 0.3 + Math.random() * 0.4,
      type: "right",
    });

    const initialSymbols: Symbol[] = [
      ...Array.from({ length: 12 }, createRadialSymbol),
      ...Array.from({ length: 12 }, createLeftSymbol),
      ...Array.from({ length: 12 }, createRightSymbol),
    ];

    initialSymbols.forEach((symbol, index) => {
      symbol.delay = index * 0.08;
      symbol.createdAt = Date.now() - index * 100;
    });

    setSymbols(initialSymbols);

    const interval = setInterval(() => {
      setSymbols((prev) => {
        const now = Date.now();
        const maxSymbols = 120;
        const maxAge = 7000;
        const fadeOutAge = 6000;

        let updatedSymbols = prev.map((symbol) => {
          const age = now - (symbol.createdAt || now);

          if (age > fadeOutAge && !symbol.isRemoving) {
            return { ...symbol, isRemoving: true };
          }
          return symbol;
        });

        updatedSymbols = updatedSymbols.filter((symbol) => {
          const age = now - (symbol.createdAt || now);
          return age < maxAge;
        });

        if (updatedSymbols.length > maxSymbols) {
          const sorted = updatedSymbols.sort(
            (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
          );
          const toKeep = sorted.slice(0, maxSymbols - 5);
          const toRemove = sorted
            .slice(maxSymbols - 5)
            .map((symbol) => ({ ...symbol, isRemoving: true }));
          updatedSymbols = [...toKeep, ...toRemove];
        }

        const randomType = Math.random();
        let newSymbol: Symbol;

        if (randomType < 0.3) {
          newSymbol = createRadialSymbol();
        } else if (randomType < 0.65) {
          newSymbol = createLeftSymbol();
        } else {
          newSymbol = createRightSymbol();
        }

        newSymbol.createdAt = now;

        return [...updatedSymbols, newSymbol];
      });
    }, 120 + Math.random() * 150);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = (symbolId: string) => {
    setSymbols((prev) => prev.filter((symbol) => symbol.id !== symbolId));
  };

  return (
    <div className="z-[-1] absolute inset-0 overflow-hidden font-mono pointer-events-none">
      <AnimatePresence>
        {symbols.map((symbol) => {
          const endX =
            Math.cos((symbol.angle * Math.PI) / 180) * symbol.distance;
          const endY =
            Math.sin((symbol.angle * Math.PI) / 180) * symbol.distance;

          return (
            <motion.div
              key={symbol.id}
              className="absolute text-purple-300/60 select-none"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                rotate: 0,
                scale: 0.3,
              }}
              animate={{
                x: endX,
                y: endY,
                opacity: symbol.isRemoving ? 0 : symbol.opacity,
                rotate: symbol.isRemoving ? 0 : 180 + Math.random() * 180,
                scale: symbol.isRemoving ? 0.2 : 1,
              }}
              transition={{
                duration: symbol.isRemoving ? 1.5 : symbol.duration,
                delay: symbol.isRemoving ? 0 : symbol.delay,
                ease: symbol.isRemoving ? "easeOut" : [0.05, 0.9, 0.9, 1.0],
                rotate: {
                  duration: symbol.isRemoving ? 1.5 : symbol.duration,
                  ease: symbol.isRemoving ? "easeOut" : "easeInOut",
                },
                opacity: {
                  duration: symbol.isRemoving ? 1.5 : 0.5,
                  delay: symbol.isRemoving ? 0 : symbol.delay,
                  ease: symbol.isRemoving ? "easeOut" : "easeIn",
                },
                scale: {
                  duration: symbol.isRemoving ? 1.5 : 0.8,
                  delay: symbol.isRemoving ? 0 : symbol.delay,
                  ease: symbol.isRemoving ? "easeOut" : "easeOut",
                },
              }}
              onAnimationComplete={() => handleAnimationComplete(symbol.id)}
              style={{
                fontSize: `${symbol.size}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {symbol.symbol}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default SymbolsBackground;
