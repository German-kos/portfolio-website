// Animation timing constants
export const TYPING_SPEEDS = {
  NAME: 40, // milliseconds per character
  ROLE: 15, // milliseconds per character
  DESCRIPTION: 12, // milliseconds per character
} as const;

export const DELAYS = {
  INITIAL: 200, // delay before starting animation
  BETWEEN_SECTIONS: 100, // delay between name → role
  SECTION_START: 50, // small delay when starting each section
} as const;

export const WIGGLE_ANIMATION = {
  DURATION: 0.6, // duration of each wiggle
  INITIAL_DELAY: 5, // delay before first wiggle starts
  STAGGER_DELAY: 1.6, // delay between left and right button
  REPEAT_DELAY: 6.6, // delay between wiggle cycles
  ROTATION_PATTERN: [0, -5, 5, -3, 3, -2, 2, 0] as number[], // wiggle rotation keyframes
} as const;

export const FADE_DURATION = 0.3; // button fade-in duration

// Typing sections configuration
export const TYPING_SECTIONS = [
  {
    text: "German Kostiakov",
    speed: TYPING_SPEEDS.NAME,
    delayAfter: DELAYS.BETWEEN_SECTIONS,
  },
  {
    text: "Full-Stack Developer",
    speed: TYPING_SPEEDS.ROLE,
    delayAfter: DELAYS.BETWEEN_SECTIONS,
  },
  {
    text: "Ready to bring your digital ideas to life",
    speed: TYPING_SPEEDS.DESCRIPTION,
    delayAfter: DELAYS.SECTION_START,
  },
] as const;
