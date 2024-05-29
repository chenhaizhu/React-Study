import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [redBorder, setRedBorder] = useState(false);

  // const pStyle = {
  //   color: "white",
  //   backgroundColor: "pink",
  //   border: redBorder ? "red solid 2px" : "blue solid 2px",
  // };

  const clickHandler = () => {
    setRedBorder((prevState) => !prevState);
  };

  return (
    <div>
      {/* <p style={pStyle} className="p1"> */}
      <p className={`p1 ${redBorder ? "" : "blueBorder"}`}>我是一个段落</p>
      <button onClick={clickHandler}>点我一下</button>
    </div>
  );
};

export default App;
