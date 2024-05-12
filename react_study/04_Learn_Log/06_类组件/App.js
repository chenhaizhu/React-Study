import React from "react";

/**
 * 类组件必须继承React.Component
 *    相较于函数组件类组件的编写要麻烦一些，但是它俩的功能是一样的
 */
class App extends React.Component {
  // 类组件中必须添加一个render()方法，且方法的返回值要是一个JSX
  render() {
    return <div>我是一个类组件</div>;
  }
}

// 导出App
export default App;
