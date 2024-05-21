import React, { Component } from "react";
import User from "./components/User";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <User name={"猪八戒"} age={28} gender={"男"} />
      </div>
    );
  }
}

export default App;
