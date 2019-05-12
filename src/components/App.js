import { Route, Router, Switch } from "react-router-dom";
import React from "react";

import DeleteStudents from "../components/students/DeleteStudents";
import DeleteТеacher from "../components/teachers/DeleteTeacher";
import history from "../history";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/delete/student/:id" exact component={DeleteStudents} />
        <Route path="/delete/teacher/:id" exact component={DeleteТеacher} />
      </Switch>
    </Router>
  );
};

export default App;
