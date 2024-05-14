import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = () => {
  // 模拟一组从服务器中加载的数据
  const logsData = [
    {
      id: "001",
      date: new Date(2024, 4, 23, 12, 30),
      desc: "学习vue",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2024, 5, 30, 18, 30),
      desc: "学习react",
      time: 30,
    },
    {
      id: "003",
      date: new Date(2024, 6, 15, 12, 40),
      desc: "学习js",
      time: 60,
    },
    {
      id: "004",
      date: new Date(2024, 6, 20, 15, 30),
      desc: "学习html",
      time: 30,
    },
  ];

  // 将数据放入JSX中
  const logItemData = logsData.map((value) => (
    <LogItem
      key={value.id}
      date={value.date}
      desc={value.desc}
      time={value.time}
    />
    // <LogItem {...value} />
  ));

  return (
    <div className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="123" hello="abc" fn={() => {}} /> */}
      {/* <LogItem
        date={new Date(2024, 5, 13)}
        desc={"学习JavaScript"}
        time={"50"}
      />
      <LogItem date={new Date(2024, 7, 5)} desc={"学习React"} time={"30"} /> */}
      {logItemData}
    </div>
  );
};

export default Logs;
