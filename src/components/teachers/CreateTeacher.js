import { connect } from 'react-redux';
import React from 'react';

// ACTIONS
import { createTeacher } from '../../store/actions/index';
// COMPONENTS
import TeachersForm from './teachersForm/TeachersForm';



const CreateStudent = (props) => {

    const onSubmit = formValues => {
        
        props.createTeacher(formValues)
    }

    return (
        <div>
            <TeachersForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect(
    null,
    { createTeacher }
)(CreateStudent);