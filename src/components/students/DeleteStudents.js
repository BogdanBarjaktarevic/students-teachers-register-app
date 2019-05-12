import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { deleteStudent } from "../../store/actions/index";
import history from "../../history";
import Modal from "../UI/Modal";

class StreamDelete extends React.Component {
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        {!this.props.student ? null : (
          <button
            onClick={() => this.props.deleteStudent(id)}
            className="btn btn-danger"
          >
            Обриши
          </button>
        )}
        <Link to="/" className="btn btn-secondary">
          Откажи
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (this.props.deleteError) {
      return "Одабрани ученик је већ обрисан";
    }

    if (!this.props.student) {
      return "Молимо вас изаберите ученика кога желите да обришете";
    }

    return `Да ли сте сигурни да желите да обришете ученика са корисничким именом: ${
      this.props.student.username
    }`;
  }

  render() {
    return (
      <Modal
        title="Обриши ученика"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students[ownProps.match.params.id],
    deleteError: state.errors.studentsDeleteError
  };
};

export default connect(
  mapStateToProps,
  { deleteStudent }
)(StreamDelete);
