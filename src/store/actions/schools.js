import studentsApi from "../../api/studentsApi";
import { getStudents } from './students';
import { getTeachers } from './teachers';

//TAKE SCHOOLS FROM DATABASE
export const fetchSchool = () => {
  return async dispatch => {
    try {
      const code = localStorage.getItem("code");
      if (code) {
        const response = await studentsApi.get(`/${code}`);
        dispatch(getSchool(response.data.school, response.data.code));
        dispatch(getStudents(response.data.students));
        dispatch(getTeachers(response.data.teachers));
      }
    } catch (error) {
    }
  };
};

export const getSchool = (schoolName, code) => {
  return {
    type: "GET_SCHOOL",
    payload: {
      schoolName,
      code
    }
  };
};

export const clearSchoolCodeError = () => {
  return {
    type: "CLEAR_SCHOOL_CODE_ERROR",
    payload: ""
  };
};
