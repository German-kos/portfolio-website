const StaticGradientBackground = () => {
  return (
    <div className="z-[-3] absolute inset-0 overflow-hidden">
      <div className="z-[-3] absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 w-full h-full" />

      <div className="z-[-2] absolute inset-0 opacity-20">
        <div className="top-0 left-0 absolute bg-gradient-to-b from-purple-400/30 to-transparent w-full h-32" />

        <div className="top-0 right-0 absolute bg-gradient-to-bl from-pink-500/20 to-transparent blur-3xl rounded-full w-64 h-64" />
        <div className="bottom-0 left-0 absolute bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl rounded-full w-48 h-48" />

        <div className="bottom-0 left-0 absolute bg-gradient-to-t from-indigo-950/50 to-transparent w-full h-40" />
      </div>
    </div>
  );
};

export default StaticGradientBackground;
