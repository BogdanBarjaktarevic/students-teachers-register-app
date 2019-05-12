import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import React, { useState } from "react";
import checkExistingValues from '../../../utils/checkExistingValues';

import InputField from "../../UI/form/InputField";
import TableHeading from "../../table/TableHeading";
import ValueExists from "../../UI/form/ValueExists";

const validate = (formValues, props) => {
  const errors = {};

  const nameTaken = props.teachers.filter(teacher => {
    return formValues.username === teacher.username;
  });

  if (!formValues.username) {
    errors.username = "Неопходно је да унесете корисничко име";
  } else if (/[^\w\s)]/g.test(formValues.username)) {
    errors.username = "Неисправно унето корисничко име";
  } else if (nameTaken.length > 0) {
    errors.username = "Name taken";
  }

  if (!formValues.classdepartment) {
    errors.classdepartment = "Непходно је да унесете разред и одељење";
  }

  return errors;
};

const FormTeacher = props => {
  const [usernameError, setUsernameError] = useState(false);
  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };

  const handleOnChangeUsername = event => {
    setUsernameError(checkExistingValues(event.target.value, props.teachers, "username"))
  };

  return (
    <>
      <div className="d-flex align-items-center" style={{ height: "34px" }}>
        <TableHeading title="УНОС НАСТАВНИКА:" />
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
        <ValueExists errorMessage="Корисничко име већ постоји" errorStatus={usernameError} />
        <Field
          name="classDepartment"
          type="text"
          component={InputField}
          label="РАЗРЕД И ОДЕЉЕЊЕ"
          placeholder="V/1, V/3, V/6"
        />
        <h5>Овде унесите разреде и одељења којима наставник предаје.</h5>
        <button className="btn btn-primary btn-add-student">ДОДАЈ</button>
      </form>
    </>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("createTeacher"));

const wrappedComponent = reduxForm({
  form: "createTeacher",
  validate,
  touchOnBlur: true,
  onSubmitSuccess: afterSubmit
})(FormTeacher);

const mapStateToProps = state => {
  return {
    teachers: Object.values(state.teachers)
  };
};

export default connect(mapStateToProps)(wrappedComponent);
