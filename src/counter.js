import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(5);
  function handleDecreasing() {
    setCount((count) => count - 1);
  }
  function handleIncreasing() {
    setCount((count) => count + 1);
  }
  const date = new Date("April 2nd 2025");

  date.setDate(date.getDate() + count);
  return (
    <div>
      <button onClick={handleDecreasing}>-</button>
      <span>
        {date.toDateString()}[{count}]
      </span>
      <button onClick={handleIncreasing}>+</button>
    </div>
  );
}
