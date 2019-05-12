import studentsApi from "../../api/studentsApi";
import history from "../../history";

export const getStudents = students => {
  return {
    type: "GET_STUDENTS",
    payload: students
  };
};

export const handleCreateStudent = student => {
  return {
    type: "CREATE_STUDENT",
    payload: student
  };
};

export const handleDeleteStudent = (id, error = null) => {
  if (error) {
    history.push(`/delete/student/${id}`);
  }
  return {
    type: "DELETE_STUDENT",
    payload: id
  };
};

// CREATE AND POST STUDENT TO DATABASE
export const createStudent = formValues => {
  return async (dispatch, getState) => {
    const code = getState().school.code;
    const token = getState().auth.token;
    const values = {
      ...formValues,
      code,
      token
    };
    try {
      const response = await studentsApi.post("/student", values);
      if (response.data.error) {
        throw response.data.error;
      }
      dispatch(handleCreateStudent(response.data));
      dispatch({
        type: "CLEAR_STUDENT_ERROR",
        payload: ""
      });
    } catch (error) {
      dispatch({
        type: "CREATE_STUDENT_ERROR",
        payload: error
      });
    }
  };
};

// DELETE STUDENT FROM DATABASE
export const deleteStudent = id => {
  return async (dispatch, getState) => {
    try {
      const code = getState().school.code;
      const response = await studentsApi.delete(`/${code}/student/${id}`, id);
      dispatch(handleDeleteStudent(response.data.id));
      history.push("/");
    } catch (error) {
      dispatch(
        handleDeleteStudent(error.response.data._id, error.response.data.error)
      );
      dispatch({
        type: "CREATE_STUDENT_DELETE_ERROR",
        payload: error.response.data.error
      });
      dispatch({
        type: "CLEAR_STUDENT_DELETE_ERROR",
        payload: ""
      });
    }
  };
};
