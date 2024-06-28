import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class Unmountaing extends Component {
  state = {
    isChildVisible: true,
  };

  onClick = () => {
    this.setState({
      isChildVisible: !this.state.isChildVisible,
    });
  };

  render() {
    return (
      <>
        <h2>Unmounting example</h2>
        <button onClick={this.onClick}>Click to hide the child</button>
        {this.state.isChildVisible ? <ChildComponent /> : null}
      </>
    );
  }
}

export default Unmountaing;
