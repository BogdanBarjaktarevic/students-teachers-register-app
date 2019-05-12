import { connect } from 'react-redux';
import React from 'react';

// ACTIONS
import { createStudent } from '../../store/actions/index';
// COMPONENTS
import FormStudents from './studentsForm/FormStudents';



const CreateStudent = (props) => {

    const onSubmit = formValues => {
        props.createStudent(formValues)
    }

    return (
        <div>
            <FormStudents onSubmit={onSubmit} />
        </div>
    );
}


export default connect(
    null,
    { createStudent }
)(CreateStudent);
