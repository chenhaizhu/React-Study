import React from "react";
import styles from "./App.module.css";
import A from "./A";
import { useState } from "react";

const App = () => {
  /**
   * CSS模块
   *    使用步骤：
   *        1.创建一个xxx.module.css
   *        2.在组件中引入css
   *            import styles from "./App.module.css";
   *        3.通过styles来设置类
   *            className={styles.p1}
   *    CSS模块可以动态设置唯一的类名
   *        App_p1__9uzM-
   */

  const [showBorder, setShowBorder] = useState(false);

  const clickHandler = () => {
    setShowBorder((prevState) => !prevState);
  };

  return (
    <div>
      <A />
      <p className={`${styles.p1} ${showBorder ? styles.border : ""}`}>
        我是一个段落
      </p>
      <button onClick={clickHandler}>点我一下</button>
    </div>
  );
};

export default App;
