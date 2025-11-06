import React from 'react';

function App() {
  const [count, setCount] = useState(0)
  const name='Full Stack Development';
  return (
    <>
        <h1>{name}</h1>
        <button onMouseOver={() => setCount(count + 1)}>Hover me...</button>
        <h1>{count}</h1>
        {count >= 10 ? <h1>Congratulations!! you reached 10 Likes...</h1> : <h1>You can do it.. Keep clicking!!</h1>}
    </>
  )
}
export default App;
