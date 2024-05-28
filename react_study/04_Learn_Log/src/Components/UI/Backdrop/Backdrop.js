import React from "react";
import "./Backdrop.css";
import { createPortal } from "react-dom";

// 获取Backdrop的根元素
const backdrop = document.getElementById("backdrop-root");

const Backdrop = (props) => {
  return createPortal(
    <div className="backdrop">{props.children}</div>,
    backdrop
  );
};

export default Backdrop;
