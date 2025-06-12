import {
  BreathingBackground,
  StaticBackground,
  StaticGradientBackground,
  SymbolsBackground,
} from ".";
import { useIsMobile } from "../../../hooks";

const ResponsiveBackground = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <StaticGradientBackground />
      ) : (
        <>
          <BreathingBackground />
          <SymbolsBackground />
          <StaticBackground />
        </>
      )}
    </>
  );
};

export default ResponsiveBackground;
