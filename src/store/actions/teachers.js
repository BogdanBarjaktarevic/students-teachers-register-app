import studentsApi from "../../api/studentsApi";
import history from "../../history";

export const getTeachers = teachers => {
  return {
    type: "GET_TEACHERS",
    payload: teachers
  };
};

export const handleCreateTeacher = teacher => {
  return {
    type: "CREATE_TEACHER",
    payload: teacher
  };
};

export const handleDeleteTeacher = (id, error = null) => {
  if (error) {
    history.push(`/delete/teacher/${id}`);
  }
  return {
    type: "DELETE_TEACHER",
    payload: id
  };
};

// CREATE AND POST STUDENT TO DATABASE
export const createTeacher = formValues => {
  return async (dispatch, getState) => {
    const code = getState().school.code;
    const token = getState().auth.token;
    const values = {
      ...formValues,
      code,
      token
    };
    try {
      const response = await studentsApi.post("/teacher", values);
      if (response.data.error) {
        throw response.data.error;
      }
      dispatch(handleCreateTeacher(response.data));
      dispatch({
        type: "CLEAR_TEACHER_ERROR",
        payload: ""
      });
    } catch (error) {
      dispatch({
        type: "CREATE_TEACHER_ERROR",
        payload: error
      });
    }
  };
};

// DELETE TEACHER FROM DATABASE
export const deleteTeacher = id => {
  return async (dispatch, getState) => {
    try {
      const code = getState().school.code;
      const response = await studentsApi.delete(`/${code}/teacher/${id}`, id);
      dispatch(handleDeleteTeacher(response.data.id));
      history.push("/");
    } catch (error) {
      dispatch(
        handleDeleteTeacher(error.response.data._id, error.response.data.error)
      );
      dispatch({
        type: "CREATE_TEACHER_DELETE_ERROR",
        payload: error.response.data.error
      });
      dispatch({
        type: "CLEAR_TEACHER_DELETE_ERROR",
        payload: ""
      });
    }
  };
};