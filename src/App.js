import { useSelector, useDispatch } from "react-redux";
import { openModel } from "./actions/index";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const myState = useSelector((state) => state.Open_Close);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>goodmorning</h1>

      <button onClick={() => dispatch(openModel())}>open</button>

      {myState && <Modal />}
    </div>
  );
};

export default App;
