import React from "react";

import CreateStudent from "../students/CreateStudents";
import Footer from "../footer/Footer";
import ListStudents from "../students/ListStudents";
import CreateTeacher from "../teachers/CreateTeacher";
import ListTeachers from "../teachers/ListTeachers";

import "./Dashboard.css";
import DashboardNote from "./DashboardNote/DashboardNote";
import DashboardHeader from "./DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <>
      <main>
        <DashboardHeader />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-12 text-center">
              <DashboardNote />
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <CreateStudent />
            </div>
            <div className="col-md-7">
              <ListStudents />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-4">
              <CreateTeacher />
            </div>
            <div className="col-md-7">
              <ListTeachers />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
