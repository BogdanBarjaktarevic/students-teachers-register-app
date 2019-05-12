import React from "react";

const renderSelectField = ({
  input,
  label,
  children,
  meta: { touched, error }
}) => {
  const className = `form-group ${error && touched ? "error" : ""}`;
  let renderError = null;

  if (touched && error) {
    renderError = (
      <div className="ui error mini message">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <label>{label}</label>
      <select {...input} className="form-control">{children}</select>
      {renderError}
    </div>
  );
};

export default renderSelectField;
