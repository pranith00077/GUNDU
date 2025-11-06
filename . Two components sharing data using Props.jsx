import React from 'react';

function GreetingCard(props) {
  return <h2>Hello, {props.userName}!</h2>;
}

function App() {
  return (
    <div>
      <h1>Parent-Child Communication with Props</h1>
      <GreetingCard userName="Alice" />
    </div>
  );
}
export default App;
