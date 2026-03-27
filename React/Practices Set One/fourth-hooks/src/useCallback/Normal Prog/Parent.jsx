import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Child Button Clicked!");
  };

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

function Child({ onClick }) {
  console.log("Child rendered ❌");
  return <button onClick={onClick}>Child Button</button>;
}

export default App;

// ❌ Issue:
// Even if you only increment count in the parent, Child component renders again
// Why? → Because handleClick function is new every time