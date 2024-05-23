import React, { useState } from "react";
import "./LogsForm.css";
import Card from "../UI/Card/Card";

const LogsForm = () => {
  /**
   * 当表单项发生变化时获取用户输入的内容
   */
  // 创建三个变量，用来存储表单中的数据
  // let inputDate = "";
  // let inputDesc = "";
  // let inputTime = 0;

  // const [inputDate, setInputDate] = useState("");
  // const [inputDesc, setInputDesc] = useState("");
  // const [inputTime, setInputTime] = useState("");

  // 将表单数据统一到一个state中
  const [formData, setFormData] = useState({
    inputDate: "",
    inputDesc: "",
    inputTime: "",
  });

  // 创建一个响应函数来监听日期的变化
  const dateChangeHandler = (e) => {
    setFormData({ ...formData, inputDate: e.target.value });
  };

  // 创建一个响应函数来监听内容的变化
  const descChangeHandler = (e) => {
    // 获取到当前触发事件的对象
    // 事件对象中保存了当前事件触发时的所有信息
    // event.target指向的是出发时间的对象（DOM对象）
    setFormData({ ...formData, inputDesc: e.target.value });
  };

  // 创建一个响应函数来监听时间的变化
  const timeChangeHandler = (e) => {
    setFormData({ ...formData, inputTime: e.target.value });
  };

  // 当表单提交时，汇总表单中的数据
  /**
   * 在React中，通常表单不需要自行提交，而是要通过React提交
   */
  const formSubmitHandler = (e) => {
    // 取消表单的默认行为
    e.preventDefault();
    // 获取表单项中的数据日期、内容、时长
    // 将数据拼成一个对象
    const newLog = {
      date: new Date(formData.inputDate),
      desc: formData.inputDesc,
      time: +formData.inputTime,
    };

    // 清空表单项
    // setInputDate("");
    // setInputDesc("");
    // setInputTime("");
    setFormData({
      inputDate: "",
      inputDesc: "",
      inputTime: "",
    });

    console.log(newLog);
    /**
     * 提交表单后如何清空表单中的旧数据
     * 现在这种表单，在React中称为非受控组件
     *
     * 我们可以将表单中的数据存储到state中，然后将state设置为表单项value值，
     * 这样当表单项发生变化时，state会随之变化
     * 反之，state发生变化，表单项也会跟着改变，这种操作我们成为双向绑定
     * 这样一来，表单就成为了一个受控组件
     *
     */
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            value={formData.inputDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            value={formData.inputDesc}
            onChange={descChangeHandler}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            value={formData.inputTime}
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
