import { useEffect, useState } from "react";

const AppCounter1 = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log("Hello");
  }, [count]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 gap-5">
      <div className="p-10 bg-white rounded-lg shadow-sm"> Hallo </div>
      <button
        className="p-10 bg-blue-400 rounded-lg hover:bg-blue-500 font-bold"
        onClick={countUp}
      >
        +
      </button>
      <button
        className="p-10 bg-purple-400 rounded-lg hover:bg-purple-500 font-bold"
        onClick={countDown}
      >
        -
      </button>
      <div className="p-10 bg-cyan-300 rounded-lg w-60 text-center font-bold">
        Counter: {count}
      </div>
    </div>
  );
};

export default AppCounter1;
