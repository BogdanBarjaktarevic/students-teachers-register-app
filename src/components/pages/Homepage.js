import { connect } from "react-redux";
import React from "react";

import Dashboard from "../dashboard/Dashboard";
import Login from "../login/Login";

const Homepage = props => {
  let page = <Dashboard />;
  if (!props.signedIn) {
    page = <Login />;
  }

  return page;
};

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn
  };
};

export default connect(mapStateToProps)(Homepage);
