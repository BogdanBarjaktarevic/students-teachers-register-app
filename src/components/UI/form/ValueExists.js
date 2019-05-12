import React from "react";

const ValueExists = ({ errorMessage, errorStatus }) => {
  if (!errorStatus) {
    return null;
  }

  return (
    <div className="ui error mini message">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ValueExists;
