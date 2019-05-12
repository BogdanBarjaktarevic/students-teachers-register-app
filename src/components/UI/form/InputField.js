import React from "react";

const renderInputField = ({ input, label, type, meta: { touched, error }, style }) => {
  const className = `form-group ${error && touched ? "error" : ""}`;
  let renderError = null;

  if (touched && error && error !== "Name taken") {
    renderError = (
      <div className="ui error mini message">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {label === "Шифра школе" ? null : <label>{label}</label>}
      <input
        {...input}
        type={type}
        autoComplete="off"
        className="form-control"
        placeholder={label === "Шифра школе" ? "Кôд школе" : null}
        style={style}
      />
      {renderError}
    </div>
  );
};

export default renderInputField;