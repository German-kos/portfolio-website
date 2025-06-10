// Performance and visual constants
export const PERFORMANCE_CONFIG = {
  MAX_SYMBOLS: 120,
  CREATION_INTERVAL: 135,
  CREATION_VARIANCE: 135,
  MAX_AGE: 7000,
  FADE_OUT_AGE: 6000,
  BATCH_CLEANUP_SIZE: 5,
} as const;

// Visual configuration for symbols
export const VISUAL_CONFIG = {
  SYMBOLS: [
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
  ],
  SIZES: {
    SMALL: { weight: 0.2, min: 10, max: 12 },
    MEDIUM: { weight: 0.5, min: 14, max: 20 },
    LARGE: { weight: 0.3, min: 20, max: 26 },
  },
  DISTANCES: {
    RADIAL: { min: 500, max: 900 },
    SIDE: { min: 600, max: 900 },
  },
  DURATIONS: {
    RADIAL: { min: 5, max: 9 },
    SIDE: { min: 6, max: 10 },
  },
  OPACITY: { min: 0.3, max: 0.7 },
} as const;
