const initialState = false;

const Open_Close = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODULE":
      return (state = true);
    case "CLOSE_MODULE":
      return (state = false);
    default:
      return state;
  }
};
export default Open_Close;
