import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const value = useSelector((state) => state[0].value);
  console.log(value);
  return <div></div>;
}

export default App;
