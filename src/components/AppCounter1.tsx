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
        className="p-10 bg-green-300 rounded-lg hover:bg-green-400"
        onClick={countUp}
      >
        +
      </button>
      <button
        className="p-10 bg-orange-300 rounded-lg hover:bg-orange-400"
        onClick={countDown}
      >
        -
      </button>
      <div className="p-10 bg-cyan-300 rounded-lg w-32 text-center font-bold">
        {count}
      </div>
    </div>
  );
};

export default AppCounter1;
