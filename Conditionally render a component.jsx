import React, { useState } from 'react';

function SecretMessage() {
  return <p>This is a secret message!</p>;
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <button onMouseOver={() => setCount(count + 1)}>Hover me...</button>
        <h1>{count}</h1>
        {count >= 10 ? <h1>Congratulations!! you reached 10 Likes...</h1> : <h1>You can do it.. Keep clicking!!</h1>}
    </>
  )
}
export default App;
