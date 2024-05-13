import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = () => {
  return (
    <div className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="123" hello="abc" fn={() => {}} /> */}
      <LogItem date={new Date()} desc={"学习JavaScript"} time={"50"} />
      <LogItem date={new Date()} desc={"学习React"} time={"30"} />
    </div>
  );
};

export default Logs;
