import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import TableInfo from "../table/TableInfo";
import { sort } from "../../utils/sort";

import './ListTeachers.css';
import TableHead from '../table/TableHead';

class ListTeachers extends React.Component {

  state = {
    sortType: "Датум"
  };

  renderList() {
    const teacherList = sort(this.props.teachers, this.state.sortType)

    return teacherList.map((teacher, i) => {
      return (
        <tr key={teacher._id}>
          <th scope="row" style={{ color: "rgb(0, 104, 142)" }}>
            {i + 1}.
          </th>
          <td>{teacher.username}</td>
          <td>{teacher.classDepartment}</td>
          <td>
            <Link
              to={`/delete/teacher/${teacher._id}`}
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
  }

  getValue = value => {
    this.setState({ sortType: value });
  };

  render() {
    return (
      <div>
        <TableInfo title="УНЕТИ НАСТАВНИЦИ:" titleCount="Укупно наставника:" sortList={["Сортирај", "Датум", "Корисничко име"]} persons={this.props.teachers} getSortValue={this.getValue}/>
        <div className="table-responsive shadow-sm p-3 mb-5 bg-white rounded text-center teachers-table">
          <table className="table">
            <TableHead tableHeads={["#", "Корисничко име", "Разред и одељење", "Уклони"]} />
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teachers: Object.values(state.teachers)
  };
};

export default connect(
  mapStateToProps,
)(ListTeachers);
