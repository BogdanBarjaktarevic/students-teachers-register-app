const initialState = {
  signedIn: false,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        signedIn: action.payload.signedIn
      };
    case "LOGOUT":
      return {
        ...state,
        signedIn: false,
        token: null
      };
    default:
      return state;
  }
};
