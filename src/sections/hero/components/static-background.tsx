const StaticBackground = () => {
  return (
    <div className="z-[-1] absolute inset-0 flex justify-center items-center">
      <div className="bg-black/25 shadow-2xl shadow-black/50 backdrop-blur-xs border border-purple-200/10 min-w-160 min-h-600 rotate-18" />
    </div>
  );
};
export default StaticBackground;
