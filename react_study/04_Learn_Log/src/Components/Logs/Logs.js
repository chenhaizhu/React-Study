import { useState } from "react";
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = (props) => {
  /**
   * losData用来存储学习的日志
   *    这个数据除了当前组件Logs需要使用外，LogsForm也需要使用
   *    当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中
   *    这样就可以使得多个组件都能方便的访问到这个数据
   *
   * state的提升
   */
  // 模拟一组从服务器中加载的数据

  // 创建一个存储年份的state
  const [year, setYear] = useState(2022);

  // 过滤数据，只显示某一年的数据
  let filterData = props.logsData.filter(
    (value) => value.date.getFullYear() === year
  );

  // 创建一个修改年份的函数
  const changeYearhandler = (year) => {
    setYear(year);
  };

  // 将数据放入JSX中
  let logItemData = filterData.map((value) => (
    <LogItem
      onDelLog={() => props.onDelLog(value.id)}
      key={value.id}
      date={value.date}
      desc={value.desc}
      time={value.time}
    />
    // <LogItem {...value} />
  ));
  if (logItemData.length === 0) {
    logItemData = <p className="no-logs">没有找到日志！</p>;
  }

  return (
    <Card className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="123" hello="abc" fn={() => {}} /> */}
      {/* <LogItem
        date={new Date(2024, 5, 13)}
        desc={"学习JavaScript"}
        time={"50"}
      />
      <LogItem date={new Date(2024, 7, 5)} desc={"学习React"} time={"30"} /> */}
      {/* 引入年份选择组件 */}
      <LogFilter year={year} onYearChange={changeYearhandler} />
      {logItemData}
    </Card>
  );
};

export default Logs;
