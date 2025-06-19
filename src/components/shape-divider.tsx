import Wave from "react-wavify";

interface ShapeDividerProps {
  fill?: string;
  id?: string;
}

// note to self: us the ismobile hook to conditionally change the options of the wave for the mobile version
// it has too many points and rises too high on mobile

const ShapeDivider = ({ fill, id }: ShapeDividerProps) => {
  return (
    <div className="-bottom-[6px] left-0 absolute w-full overflow-hidden">
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
          className="bottom-0 opacity-20"
          id={id}
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
          className="bottom-0 opacity-50"
          id={id}
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
        id={id}
      />
    </div>
  );
};

export default ShapeDivider;
