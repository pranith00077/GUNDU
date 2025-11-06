<html>
    s0.creat a folder for your project and open terminal in that folder
    s1.node -v check
    s2.run "npx create-react-app my-app" terminal
    s3. go to "cd my-app"( in terminal)
    s4.src/App.js paste the code in this file

<body>
    import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.incrementCount}>Like</button>
        <button onClick={this.decrementCount}>Dislike</button>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default App;

</body>


</html>