import studentsApi from "../../api/studentsApi";
import { getSchool, clearSchoolCodeError} from './schools';
import { getStudents } from './students';
import { getTeachers } from './teachers';

export const handleLogin = (token, signedIn) => {
  return {
    type: "LOGIN",
    payload: {
      token,
      signedIn
    }
  };
};

export const handleLogout = () => {
  return {
    type: "LOGOUT"
  };
};

// CHECKS IF USER IS SIGNED IN

export const loginStatus = () => {
  return async dispatch => {
    const token = localStorage.getItem("token");
    let signedIn = false;
    if (token) {
      signedIn = true;
      dispatch(handleLogin(token, signedIn));
    }
  };
};

// POST SCHOOL CODE TO DATABASE
export const login = code => {
  return async dispatch => {
    try {
      const response = await studentsApi.post("/school/login", code);
      const token = response.data.token;
      let signedIn = false;
      if (response.data.error) {
        throw response.data.error;
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("code", response.data.school.code);
      if (token) {
        signedIn = true;
      }

      dispatch(
        getSchool(response.data.school.school, response.data.school.code)
      );
      dispatch(getStudents(response.data.school.students));
      dispatch(getTeachers(response.data.school.teachers));
      dispatch(handleLogin(token, signedIn));
      dispatch(clearSchoolCodeError());
    } catch (error) {
      dispatch({
        type: "CREATE_SCHOOL_CODE_ERROR",
        payload: error
      });
    }
  };
};

// LOGOUT FROM APPLICATION

export const logout = () => {
  return async dispatch => {
    await studentsApi.post("/school/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("code");

    dispatch(handleLogout());
  };
};
