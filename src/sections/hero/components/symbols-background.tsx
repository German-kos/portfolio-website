import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERFORMANCE_CONFIG, VISUAL_CONFIG } from "../constants";

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
  createdAt: number;
  isRemoving?: boolean;
}

const SymbolsBackground = () => {
  const [symbols, setSymbols] = useState<Symbol[]>([]);

  // Optimized symbol size generation
  const getSymbolSize = (): number => {
    const rand = Math.random();
    const { SMALL, MEDIUM, LARGE } = VISUAL_CONFIG.SIZES;

    if (rand < SMALL.weight) {
      return SMALL.min + Math.random() * (SMALL.max - SMALL.min);
    } else if (rand < SMALL.weight + MEDIUM.weight) {
      return MEDIUM.min + Math.random() * (MEDIUM.max - MEDIUM.min);
    } else {
      return LARGE.min + Math.random() * (LARGE.max - LARGE.min);
    }
  };

  // Optimized angle generation with horizontal bias
  const generateAngle = (type: "radial" | "left" | "right"): number => {
    if (type === "left") {
      return 90 + Math.random() * 180;
    } else if (type === "right") {
      return (270 + Math.random() * 180) % 360;
    }

    // Radial with horizontal bias
    let angle = Math.random() * 360;
    const isHorizontal =
      (angle > 45 && angle < 135) || (angle > 225 && angle < 315);

    if (isHorizontal && Math.random() < 0.6) {
      // Bias away from horizontal center
      const section = angle > 45 && angle < 135 ? "top" : "bottom";
      angle =
        section === "top"
          ? Math.random() < 0.5
            ? 45 + Math.random() * 30
            : 105 + Math.random() * 30
          : Math.random() < 0.5
          ? 225 + Math.random() * 30
          : 285 + Math.random() * 30;
    }

    return angle;
  };

  // Optimized symbol creation functions
  const createSymbol = (type: "radial" | "left" | "right"): Symbol => {
    const angle = generateAngle(type);
    const isRadial = type === "radial";
    const distanceConfig = isRadial
      ? VISUAL_CONFIG.DISTANCES.RADIAL
      : VISUAL_CONFIG.DISTANCES.SIDE;
    const durationConfig = isRadial
      ? VISUAL_CONFIG.DURATIONS.RADIAL
      : VISUAL_CONFIG.DURATIONS.SIDE;

    return {
      id: Math.random().toString(36).substr(2, 9),
      symbol:
        VISUAL_CONFIG.SYMBOLS[
          Math.floor(Math.random() * VISUAL_CONFIG.SYMBOLS.length)
        ],
      angle,
      distance:
        distanceConfig.min +
        Math.random() * (distanceConfig.max - distanceConfig.min),
      duration:
        durationConfig.min +
        Math.random() * (durationConfig.max - durationConfig.min),
      delay: Math.random() * 2,
      size: getSymbolSize(),
      opacity:
        VISUAL_CONFIG.OPACITY.min +
        Math.random() * (VISUAL_CONFIG.OPACITY.max - VISUAL_CONFIG.OPACITY.min),
      type,
      createdAt: Date.now(),
    };
  };

  useEffect(() => {
    // Create initial symbols with staggered timing
    const initialSymbols: Symbol[] = [];
    const symbolCounts = { radial: 36, left: 42, right: 42 }; // Total: 120 (same as original)

    Object.entries(symbolCounts).forEach(([type, count], typeIndex) => {
      for (let i = 0; i < count; i++) {
        const symbol = createSymbol(type as "radial" | "left" | "right");
        symbol.delay = (typeIndex * count + i) * 0.08;
        symbol.createdAt = Date.now() - (typeIndex * count + i) * 100;
        initialSymbols.push(symbol);
      }
    });

    setSymbols(initialSymbols);

    // Optimized symbol management interval
    const interval = setInterval(() => {
      setSymbols((prevSymbols) => {
        const now = Date.now();
        let updatedSymbols = [...prevSymbols];

        // Single pass: mark for removal and filter
        updatedSymbols = updatedSymbols
          .map((symbol) => {
            const age = now - symbol.createdAt;
            if (age > PERFORMANCE_CONFIG.FADE_OUT_AGE && !symbol.isRemoving) {
              return { ...symbol, isRemoving: true };
            }
            return symbol;
          })
          .filter((symbol) => {
            const age = now - symbol.createdAt;
            return age < PERFORMANCE_CONFIG.MAX_AGE;
          });

        // Efficient over-limit cleanup
        if (updatedSymbols.length > PERFORMANCE_CONFIG.MAX_SYMBOLS) {
          const sorted = updatedSymbols.sort(
            (a, b) => a.createdAt - b.createdAt
          );
          const toRemove = Math.min(
            PERFORMANCE_CONFIG.BATCH_CLEANUP_SIZE,
            updatedSymbols.length - PERFORMANCE_CONFIG.MAX_SYMBOLS + 5
          );

          // Mark oldest for removal instead of immediate deletion
          for (let i = 0; i < toRemove; i++) {
            if (sorted[i] && !sorted[i].isRemoving) {
              sorted[i] = { ...sorted[i], isRemoving: true };
            }
          }
          updatedSymbols = sorted;
        }

        // Add new symbol with weighted distribution
        const typeRandom = Math.random();
        const newSymbolType =
          typeRandom < 0.3 ? "radial" : typeRandom < 0.65 ? "left" : "right";
        const newSymbol = createSymbol(newSymbolType);

        return [...updatedSymbols, newSymbol];
      });
    }, PERFORMANCE_CONFIG.CREATION_INTERVAL + Math.random() * PERFORMANCE_CONFIG.CREATION_VARIANCE);

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
