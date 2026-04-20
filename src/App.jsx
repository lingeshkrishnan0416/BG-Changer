import { useState } from "react";
import "./APP.css";

function App() {
  const [color, setColor] = useState("white");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="flex justify-center min-h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10  flex justify-center p-2 bg-black">
        <div className="flex flex-wrap justify-center gap-4 bg-black/50 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <button
            onClick={() => changeColor("red")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 transition-all duration-200"
          >
            Press
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-200"
          >
            Press
          </button>
          <button
            onClick={() => changeColor("green")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition-all duration-200"
          >
            Press
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
