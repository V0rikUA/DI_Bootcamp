import React, { Component } from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "Red",
      show: true,
    };
  }

  changeColorOnClick = () => {
    this.setState({ color: "Blue" });
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 5000);
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.color}</h1>
        <button onClick={() => this.changeColorOnClick()}>change color</button>
        <br />
        {this.state.show ? <Child /> : null}
        {/* <Child /> */}
        <button onClick={() => this.setState({ show: false })}>
          Delete header
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about unmounted!");
  }

  render() {
    return <h2>Hello world!</h2>;
  }
}
export default Color;
