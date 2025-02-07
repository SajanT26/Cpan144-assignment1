import { useState } from "react";
import Nav from "../components/Nav";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <Nav />
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

      <style jsx>{`
        .counter-container {
          text-align: center;
          padding: 20px;
        }
        h1 {
          color:rgb(243, 0, 0);
          font-size: 36px;
        }
        .buttons {
          margin-top: 20px;
        }
        button {
          margin: 5px;
          padding: 10px 20px;
          background-color:rgb(243, 0, 0);
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color:rgb(181, 0, 172);
        }
      `}</style>
    </div>
  );
}
