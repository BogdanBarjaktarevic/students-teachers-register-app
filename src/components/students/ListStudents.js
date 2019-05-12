import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { fetchSchool, loginStatus } from "../../store/actions/index";
import { sort } from "../../utils/sort";

import "./ListStudents.css";
import TableInfo from "../table/TableInfo";
import TableHead from "../table/TableHead";

class ListStudents extends React.Component {
  state = {
    sortType: "Датум"
  };

  componentDidMount() {
    this.props.loginStatus();
    this.props.fetchSchool();
  }

  renderList = () => {
    const studentList = sort(this.props.students, this.state.sortType);

    return studentList.map((student, i) => {
      return (
        <tr key={student._id}>
          <th scope="row" style={{ color: "rgb(0, 104, 142)" }}>
            {i + 1}.
          </th>
          <td>{student.username}</td>
          <td>{student.class}</td>
          <td>{student.department}</td>
          <td>
            <Link
              to={`/delete/student/${student._id}`}
              className="btn btn-secondary btn-sm btn-remove-student"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Уклони
            </Link>
          </td>
        </tr>
      );
    });
  };

  getValue = value => {
    this.setState({ sortType: value });
  };

  render() {
    return (
      <div>
        <TableInfo
          title="УНЕТИ УЧЕНИЦИ:"
          titleCount="Укупно ученика:"
          sortList={["Сортирај", "Датум", "Корисничко име", "Разред", "Одељење"]}
          persons={this.props.students}
          getSortValue={this.getValue}
        />
        <div className="table-responsive shadow-sm p-3 mb-5 bg-white rounded text-center students-table">
          <table className="table">
            <TableHead
              tableHeads={[
                "#",
                "Корисничко име",
                "Разред",
                "Одељење",
                "Уклони"
              ]}
            />
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: Object.values(state.students)
  };
};

export default connect(
  mapStateToProps,
  { loginStatus, fetchSchool }
)(ListStudents);
