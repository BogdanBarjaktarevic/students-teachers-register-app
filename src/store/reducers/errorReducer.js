export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_STUDENT_ERROR":
      return { ...state, studentsError: action.payload };
    case "CLEAR_STUDENT_ERROR":
      return { ...state, studentsError: "" };
    case "CREATE_SCHOOL_CODE_ERROR":
      return { ...state, schoolCodeError: action.payload };
    case "CLEAR_SCHOOL_CODE_ERROR":
      return { ...state, schoolCodeError: "" };
    case "CREATE_STUDENT_DELETE_ERROR":
      return { ...state, studentsDeleteError: action.payload };
    case "CLEAR_STUDENT_DELETE_ERROR":
      return { ...state, studentsDeleteError: "" };
      case "CREATE_TEACHER_DELETE_ERROR":
      return { ...state, teachersDeleteError: action.payload };
    case "CLEAR_TEACHER_DELETE_ERROR":
      return { ...state, teachersDeleteError: "" };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
