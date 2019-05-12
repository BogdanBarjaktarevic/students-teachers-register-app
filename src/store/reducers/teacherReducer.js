import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_TEACHERS":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case "CREATE_TEACHER":
      return { ...state, [action.payload._id]: action.payload };
    case "DELETE_TEACHER":
      return _.omit(state, action.payload);
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
