import Card from "../UI/Card/Card";
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

  // 将数据放入JSX中
  const logItemData = props.logsData.map((value, index) => (
    <LogItem
      onDelLog={() => props.onDelLog(index)}
      key={value.id}
      date={value.date}
      desc={value.desc}
      time={value.time}
    />
    // <LogItem {...value} />
  ));

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
      {logItemData}
    </Card>
  );
};

export default Logs;
