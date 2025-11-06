import React, { useState } from 'react';

function App() {
   const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Like</button>
      <button onClick={decrementCount}>Dislike</button>
      <p>Count: {count}</p>
    </div>
  );
}
export default App;
