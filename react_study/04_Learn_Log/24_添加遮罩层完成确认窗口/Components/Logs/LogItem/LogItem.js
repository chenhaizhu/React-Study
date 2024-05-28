import React, { useState } from "react";
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import "./LogItem.css";

const LogItem = (props) => {
  // 在函数组件中，属性相当于函数的参数，可以通过参数来访问
  // 可以在函数组件的形参中定义一个props，props指向的是一个对象
  // 它包含了父组件中传递的所有参数

  // props是只读的，不能修改
  // props.desc = "1";
  // console.log(props);

  // 添加一个state，记录是否显示确认窗口
  const [showConfrim, setShowConfirm] = useState(false);

  const deleteItemHandler = () => {
    // 临时性
    // const isDel = window.confirm("该操作不可恢复，确认吗？");
    // 显示确认窗口
    setShowConfirm(true);
    // if (isDel) {
    //   // 删除当前item，要删除item，其实是要从数据的state移除指定的数据
    //   props.onDelLog(props.logIndex);
    // }
  };

  // 取消函数
  const cancelHandler = () => {
    setShowConfirm(false);
  };

  // 确认函数
  const okHandler = () => {
    props.onDelLog(props.logIndex);
  };

  return (
    <Card className="item">
      {showConfrim && (
        <ConfirmModal
          confirmText={"该操作不可恢复！请确认"}
          onCancel={cancelHandler}
          onOk={okHandler}
        />
      )}
      {/* 日期容器 */}
      <MyDate date={props.date} />
      {/* 日志内容容器 */}
      <div className="content">
        {/* 
          如果将组件中的数据全部写死，将导致组件无法动态设置，不具有使用价值
            我们希望组件数据可以由外部设置，在组件之间，父组件可以通过props（属性）向子组件传递数据
        */}
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time + "分钟"}</div>
      </div>
      {/* 添加一个删除按钮 */}
      <div>
        <div className="delete" onClick={deleteItemHandler}>
          ×
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
