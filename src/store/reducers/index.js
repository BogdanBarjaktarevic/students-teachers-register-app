import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import schoolReducer from './schoolReducer';
import studentsReducer from './studentReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import teacherReducer from './teacherReducer';

export default combineReducers({
  form: formReducer,
  school: schoolReducer,
  students: studentsReducer,
  auth: authReducer,
  errors: errorReducer,
  teachers: teacherReducer
});
