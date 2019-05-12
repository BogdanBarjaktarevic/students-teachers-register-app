import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/actions/auth";
import eUcionicaLogo from "../../../assets/images/eucionica logo.png";
import "./DashboardHeader.css";




const DashboardHeader = props => {
  return (
    <div className="jumbotron mb-3 text-center">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3">
            <img
              src={eUcionicaLogo}
              className="img-fluid"
              alt="Eucionica Logo"
            />
          </div>
          <div className="col-md-5 text-white text-md-center mb-3 mt-3 mb-md-0 mt-md-0">
            <h1>{props.schoolName}</h1>
          </div>
          <div className="col-md-2 text-lg-right">
            <button
              className="btn btn-primary btn-logout"
              onClick={() => props.logout()}
            >
              КРАЈ РАДА
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    schoolName: state.school.schoolName
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(DashboardHeader);
