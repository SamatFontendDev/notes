import React from 'react';
import {connect} from 'react-redux';
import {deleteNote, hideNote} from '../../modules/actions';
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

    onHideNote = () => {
        const {title, category, date, text, show, hideNote} = this.props;
        let el = {
           title,
            category,
            date,
            text,
            show: !show
        }

        hideNote(el);
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
                    <button
                    className={css.button}
                    onClick={this.onHideNote}
                    >{show ? 'Скрыть' : 'Показать'}</button>
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
        },
        hideNote: el => {
            dispatch(hideNote(el));
        }
    }
}


export default connect(null, mapDispatchToProps)(AdminNote);