import "./App.css";
import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";

const App = () => {
  return (
    <div className="app">
      {/* 引入LogsForm */}
      <LogsForm />
      <Logs />
    </div>
  );
};

export default App;
