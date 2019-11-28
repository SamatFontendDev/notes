import React from 'react';
import {connect} from 'react-redux';
import {deleteNote} from '../../modules/actions';
import css from './adminNote.module.css';
import ChangeNote from '../ChangeNote';

class AdminNote extends React.Component{
    state = {
        edit: false,
        title: '',
        text: '',
        show: true
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    onDeleteNote = () => {
        const {date, deleteNote} = this.props;
        deleteNote(date);
    }

   render() {
        const {title, category, date, text, show} = this.props;
        const {edit} = this.state;
        return(
            <li className={css.item}>
            <div className={css.wrap}>
                <div className={css.col}>
                    <div>{title}</div>
                    <div>{category}</div>
                    <div>{date}</div>
                </div>
                <div className={css.col}>
                    <button 
                    onClick={this.toggleEdit}
                    className={css.button}>{edit ? 'Отмена' : 'Редактировать'}</button>
                    <button 
                    onClick={this.onDeleteNote}
                    className={css.button}>Удалить</button>
                </div>
            </div>
            <ChangeNote 
            title={title} 
            edit={edit} 
            date={date} 
            text={text} 
            category={category} />
        </li> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        deleteNote: id => {
            dispatch(deleteNote(id));
        }
    }
}


export default connect(null, mapDispatchToProps)(AdminNote);