import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increaseByAmount,
} from "./redux/slices/counterSlices";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  return (
    <div className="App">
      <h1>redux toolkit counter</h1>
      <h2>Counter: {counter?.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseByAmount(20))}>
        increase 20
      </button>
    </div>
  );
}

export default App;
