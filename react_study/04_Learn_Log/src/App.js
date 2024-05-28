import { useState } from "react";
import "./App.css";
import "./Components/UI/ConfirmModal/ConfirmModal.css";
import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";

const App = () => {
  // 数据
  const [logsData, setLogsData] = useState([
    {
      id: "001",
      date: new Date(2021, 4, 23, 12, 30),
      desc: "学习vue",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 5, 30, 18, 30),
      desc: "学习react",
      time: 30,
    },
    {
      id: "003",
      date: new Date(2023, 6, 15, 12, 40),
      desc: "学习js",
      time: 60,
    },
    {
      id: "004",
      date: new Date(2024, 6, 20, 15, 30),
      desc: "学习html",
      time: 30,
    },
  ]);

  /**
   * 下一步：
   *    需要将LogsForm中的数据传递给App组件，然后由App组件，将新的日志添加到数组中
   */

  // 定义一个函数
  const saveLogHandler = (newLog) => {
    // 向新的日志中添加id
    newLog.id = Date.now() + "";

    // 将新数据添加到数组中
    // logsData.push(newLog);
    setLogsData([...logsData, newLog]);
  };

  // 定义一个函数用来从数据中删除一条记录
  const delLogById = (id) => {
    setLogsData((prevState) => {
      return prevState.filter((value) => value.id !== id);
    });
  };

  return (
    <div className="app">
      {/* 引入LogsForm */}
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} onDelLog={delLogById} />
    </div>
  );
};

export default App;
