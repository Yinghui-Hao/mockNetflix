import React, { Component } from "react";
import Row from "../Row";
import Bottom from "../Bottom"

class App extends Component {
  render() {
    return (
      <div className="main">
        <Row type="My List" />
        <Row type="Recommendations" />
        <Bottom/>
      </div>
    );
  }
}

export default App;
