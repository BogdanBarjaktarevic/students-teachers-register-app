import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import React, { Component } from "react";

import { clearSchoolCodeError, login, loginStatus } from "../../store/actions/index";
import InputField from "../UI/form/InputField";

import "./Login.css";
import eucionicaCircleLogo from "../../assets/images/eucionica_logo_circle.png";

const validate = formValues => {
  const errors = {};

  if (!formValues.code) {
    errors.code = "Неопходно је да унесете код";
  }

  return errors;
};

class Login extends Component {
  componentDidMount() {
    this.props.loginStatus();
  }

  componentDidUpdate() {
    if (this.props.codeError && !this.props.loginValue) {
      this.props.clearSchoolCodeError();
    }
  }

  onSubmit = code => {
    this.props.login(code);
  };

  renderError() {
    if (this.props.codeError && this.props.loginValue) {
      return (
        <div className="ui error mini message">
          <p>Неисправан код</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <form
          className="form-signin"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="text-center mb-4">
            <img
              className="mb-4 responsive-image logo-circle"
              src={eucionicaCircleLogo}
              alt="Eucionica"
            />
            <p>
             Унесите кôд школе који сте добили од администратора Е-учионице да бисте омогућили повезивање наставника и ученика.
            </p>
          </div>
          <Field
            name="code"
            type="text"
            component={InputField}
            label="Шифра школе"
            style={{ height: "46px" }}
          />
          {this.renderError()}
          <button className="btn btn-lg btn-primary btn-block btn-login-eucionica">
            Настави
          </button>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector("login");

const mapStateToProps = state => {
  return {
    codeError: state.errors.schoolCodeError,
    loginValue: selector(state, "code")
  };
};

const wrappedComponent = reduxForm({
  form: "login",
  validate
})(Login);

export default connect(
  mapStateToProps,
  { login, loginStatus, clearSchoolCodeError }
)(wrappedComponent);
