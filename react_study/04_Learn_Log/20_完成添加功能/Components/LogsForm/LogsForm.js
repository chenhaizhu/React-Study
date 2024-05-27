import React, { useState } from "react";
import "./LogsForm.css";
import Card from "../UI/Card/Card";

const LogsForm = (props) => {
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setinputDesc] = useState("");
  const [inputTime, setinputTime] = useState("");

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const descChangeHandler = (e) => {
    setinputDesc(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setinputTime(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };
    // 当要添加新的日志时，调用父组件传递过来的函数
    props.onSaveLog(newLog);
    setInputDate("");
    setinputDesc("");
    setinputTime("");
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            value={inputDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            value={inputDesc}
            onChange={descChangeHandler}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            value={inputTime}
            onChange={timeChangeHandler}
          ></input>
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
