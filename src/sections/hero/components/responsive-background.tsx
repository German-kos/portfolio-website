import { useIsMobile } from "../../../hooks";
import BreathingBackground from "./breathing-background";
import StaticBackground from "./static-background";
import SymbolsBackground from "./symbols-background";

const ResponsiveBackground = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <>Insert background component here</>
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
