import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import React, { useState } from "react";

import checkExistingValues from "../../../utils/checkExistingValues";
import InputField from "../../UI/form/InputField";
import SelectField from "../../UI/form/SelectField";
import TableHeading from "../../table/TableHeading";
import ValueExists from "../../UI/form/ValueExists";

import "./FormStudents.css";

const validate = (formValues, props) => {
  const errors = {};

  const nameTaken = props.students.filter(student => {
    return formValues.username === student.username;
  });

  if (!formValues.username) {
    errors.username = "Неопходно је да унесете корисничко име";
  } else if (/[^\w\s)]/g.test(formValues.username)) {
    errors.username = "Неисправно унето корисничко име";
  } else if (nameTaken.length > 0) {
    errors.username = "Name taken";
  }

  if (!formValues.class) {
    errors.class = "Непходно је да изаберете разред";
  }

  if (!formValues.department) {
    errors.department = "Неопходно је да изаберете одељење";
  }

  return errors;
};

const FormStudents = props => {
  const [usernameError, setUsernameError] = useState(false);

  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };

  const handleOnChangeUsername = event => {
    setUsernameError(checkExistingValues(event.target.value, props.students, "username"));
  };

  const studentClasses = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const studentDepartment = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <>
      <div className="d-flex align-items-center" style={{ height: "34px" }}>
        <TableHeading title="УНОС УЧЕНИКА:" />
      </div>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        className="shadow-sm bg-white p-3 mb-5"
      >
        <Field
          name="username"
          type="text"
          component={InputField}
          label="КОРИСНИЧКО ИМЕ"
          onChange={event => handleOnChangeUsername(event)}
        />
        <ValueExists
          errorMessage="Корисничко име већ постоји"
          errorStatus={usernameError}
        />
        <Field name="class" component={SelectField} label="РАЗРЕД">
          <option />
          {studentClasses.map(studentClass => {
            return (
              <option value={studentClass} key={studentClass}>
                {studentClass}
              </option>
            );
          })}
        </Field>
        <Field name="department" component={SelectField} label="ОДЕЉЕЊЕ">
          <option />
          {studentDepartment.map(studentDepartment => {
            return (
              <option value={studentDepartment} key={studentDepartment}>
                {studentDepartment}
              </option>
            );
          })}
        </Field>
        <h5>Овде унесите разред и одељење у које је ученик уписан.</h5>
        <button className="btn btn-primary btn-add-student">ДОДАЈ</button>
      </form>
    </>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("createStudent"));

const wrappedComponent = reduxForm({
  form: "createStudent",
  validate,
  touchOnBlur: true,
  onSubmitSuccess: afterSubmit
})(FormStudents);

const mapStateToProps = state => {
  return {
    students: Object.values(state.students)
  };
};

export default connect(mapStateToProps)(wrappedComponent);
