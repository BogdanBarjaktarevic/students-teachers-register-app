import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { deleteTeacher } from "../../store/actions/index";
import history from "../../history";
import Modal from "../UI/Modal";

class StreamDelete extends React.Component {
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        {!this.props.teacher ? null : (
          <button
            onClick={() => this.props.deleteTeacher(id)}
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
     if(this.props.deleteError){
       return "Одабрани наставник је већ обрисан";
     }

    if (!this.props.teacher) {
      return "Молимо вас изаберите наставника кога желите да обришете";
    }

    return `Да ли сте сигурни да желите да обришете наставника са корисничким именом: ${
      this.props.teacher.username
    }`;
  }

  render() {
    return (
      <Modal
        title="Обриши наставника"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    teacher: state.teachers[ownProps.match.params.id],
    deleteError: state.errors.teachersDeleteError
  
  };
};

export default connect(
  mapStateToProps,
  { deleteTeacher }
)(StreamDelete);
