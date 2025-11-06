import React from 'react';

function App() {
  const handleButtonClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
       <button onMouseOver={()=>{setCount(count-1)}}>Hover me...</button>
        <h1>{count}</h1>
    </div>
  );
}
export default App;
