import { useState, useEffect } from "react";

interface MatrixDot {
  id: string;
  top: number;
  left: number;
  delay: number;
  type: "grid" | "particle";
}

const MatrixGridBackground = () => {
  const [dots, setDots] = useState<MatrixDot[]>([]);

  useEffect(() => {
    // Generate initial dots
    const initialDots: MatrixDot[] = [];

    // Grid dots (main pulsing points)
    const gridPositions = [
      { top: 20, left: 25 },
      { top: 40, left: 60 },
      { top: 70, left: 30 },
      { top: 30, left: 80 },
      { top: 60, left: 15 },
      { top: 80, left: 70 },
      { top: 15, left: 45 },
      { top: 50, left: 85 },
      { top: 25, left: 10 },
    ];

    gridPositions.forEach((pos, index) => {
      initialDots.push({
        id: `grid-${index}`,
        top: pos.top,
        left: pos.left,
        delay: index * 0.5,
        type: "grid",
      });
    });

    // Digital particles (floating dots)
    const particlePositions = [
      { top: 25, left: 35 },
      { top: 55, left: 75 },
      { top: 75, left: 20 },
      { top: 35, left: 85 },
      { top: 45, left: 50 },
      { top: 65, left: 40 },
    ];

    particlePositions.forEach((pos, index) => {
      initialDots.push({
        id: `particle-${index}`,
        top: pos.top,
        left: pos.left,
        delay: index * 2,
        type: "particle",
      });
    });

    setDots(initialDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "gridShift 15s linear infinite",
        }}
      />

      {/* Animated Dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-full ${
            dot.type === "grid"
              ? "w-1.5 h-1.5 bg-white/60"
              : "w-1.5 h-1.5 bg-white/50"
          }`}
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            filter: "blur(1px)",
            animation:
              dot.type === "grid"
                ? `matrixPulse 3s ease-in-out infinite ${dot.delay}s`
                : `digitalFloat 6s ease-in-out infinite ${dot.delay}s`,
          }}
        />
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes gridShift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, 5px); }
          50% { transform: translate(5px, 15px); }
          75% { transform: translate(-5px, 10px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes matrixPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255,255,255,0);
          }
          50% {
            opacity: 1;
            transform: scale(1.8);
            box-shadow: 0 0 15px rgba(255,255,255,0.3);
          }
        }

        @keyframes digitalFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default MatrixGridBackground;
