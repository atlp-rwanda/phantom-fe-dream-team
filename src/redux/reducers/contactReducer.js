const contactReducer = (state = 0, action) => {
    switch (action.type) {
        case "SENDMESSAGE":
          return state + 1;
        default:
          return state;
      }
  };
  export default contactReducer;