import React from 'react';
import {connect} from 'react-redux';
import {deleteNote} from '../../modules/actions';
import css from './adminNotes.module.css';
import AdminNote from '../AdminNote';



class AdminNotes extends React.Component{
    render() {
        const {notes} = this.props;
       return(
            <ul>
                {notes.map((elem, index) => {
                    return(
                       <AdminNote show={elem.show} key={index} title={elem.title} category={elem.category} date={elem.date} text={elem.text} />
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes: state.admin.notes
    }
}

export default connect(mapStateToProps)(AdminNotes);