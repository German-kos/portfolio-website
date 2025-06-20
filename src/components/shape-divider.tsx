import Wave from "react-wavify";

interface ShapeDividerProps {
  fill?: string;
  id?: string;
  flip?: boolean;
}

// note to self: us the ismobile hook to conditionally change the options of the wave for the mobile version
// it has too many points and rises too high on mobile

const ShapeDivider = ({ fill, flip = false }: ShapeDividerProps) => {
  const rotate = flip ? "rotate-180" : "rotate-0";
  const position = flip ? "top-0" : "bottom-0";
  const parentPosition = flip ? "-top-[7px]" : "-bottom-[7px]";

  return (
    <div
      className={`${parentPosition} left-0 absolute w-full overflow-hidden ${rotate}`}
    >
      <div className="absolute w-full">
        <Wave
          fill={fill || "#d8b4fe"}
          paused={false}
          options={{
            height: 50,
            amplitude: 50,
            speed: 0.15,
            points: 7,
          }}
          className={`${position} opacity-20`}
        />
      </div>
      <div className="absolute w-full">
        <Wave
          fill={fill || "#d8b4fe"}
          paused={false}
          options={{
            height: 60,
            amplitude: 40,
            speed: 0.12,
            points: 8,
          }}
          className={`${position} opacity-50`}
        />
      </div>
      <Wave
        fill={fill || "#d8b4fe"}
        paused={false}
        options={{
          height: 100,
          amplitude: 30,
          speed: 0.1,
          points: 6,
        }}
      />
    </div>
  );
};

export default ShapeDivider;
