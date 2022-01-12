import { useDispatch } from "react-redux";
import { closeModel } from "./actions/index";

const Modal = (props) => {
  // const myState = useSelector((state) => state.Open_Close);
  const dispatch = useDispatch();

  return (
    <div className={"modal-wrapper"}>
      <div
        onClick={() => dispatch(closeModel())}
        className={"modal-backdrop"}
      />

      <div className={"modal-box"}>
        <header>
          <h1>Model</h1>
        </header>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            eligendi esse facere illo in minima nulla quis reiciendis. Eligendi
            impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga
            provident quos velit.
          </span>
          <button onClick={() => dispatch(closeModel())}>Close Modal</button>
        </p>
      </div>
    </div>
  );
};

export default Modal;
