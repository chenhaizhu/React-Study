import React from "react";
import MyDate from "./MyDate/MyDate";
import "./LogItem.css";

const LogItem = () => {
  return (
    <div className="item">
      {/* 日期容器 */}
      <MyDate />
      {/* 日志内容容器 */}
      <div className="content">
        <h2 className="desc">学习React</h2>
        <div className="time">40分钟</div>
      </div>
    </div>
  );
};

export default LogItem;
