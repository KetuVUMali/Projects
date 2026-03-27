import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child Button Clicked!");
  }, []);

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

// 👇 React.memo prevents child re-render if props don’t change
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered ✅");
  return <button onClick={onClick}>Child Button</button>;
});

export default App;



// Output in Console:
// Without useCallback

// Click “Increment” → Child rendered ❌

// With useCallback

// Click “Increment” → Child doesn’t render again ✅