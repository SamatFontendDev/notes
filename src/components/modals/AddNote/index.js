import React from 'react';
import css from './addNote.module.css';
import {connect} from 'react-redux';
import {addNote, showAddNoteModal} from '../../../modules/actions';

class AddNote extends React.Component{
    state = {
        title: '',
        text: '',
        category: '',
        date: ''
    }

    handleField = e => {
        this.setState({
            [e.target.name]: e.target.value,
            date: new Date().toString()
        })
    }

    onAddNote = () => {
       const {addNote} = this.props;
        addNote(this.state);
        this.setState({
            title: '',
            text: '',
            category: '',
            date: ''
        });
    }

    closeAddCategoryModal = () => {
        const {showAddNoteModal} = this.props;
        showAddNoteModal(false);
    }

    render() {
        const {title, text, category, date} = this.state;
        const {categories} = this.props;
        return(
            <div>
                <div className='overlay'></div>
                <div className={css.wrapp}>
                    <div className={css.title}>Добавить запись</div>
                    <div className={css.form}>
                        <div className={css.row}>
                            <input 
                            placeholder='Заголовок записи' 
                            className={css.input}
                            name='title'
                            value={title}
                            onChange={this.handleField}/>
                        </div>
                        <div className={css.row}>
                            <textarea 
                            className={css.textarea} 
                            name='text'
                            placeholder='Текс записи'
                            value={text}
                            onChange={this.handleField}
                            ></textarea>
                        </div>
                        <div className={css.row}>
                            <div className={css.subtitle}>Выбрать категорию</div>
                            <select
                            name='category' 
                            className={css.select}
                            value={category}
                            onChange={this.handleField}>
                                {categories.map(elem =>  <option>{elem}</option>)}
                            </select>
                        </div>
                        <div className={css.buttons}>
                            <button 
                            onClick={this.onAddNote} 
                            className={css.button}>Добавить запись</button>
                            <button 
                            className={css.button}
                            onClick={this.closeAddCategoryModal}>Закрыть</button>
                        </div>
                        {
                            title &&  <li className={css.item}>
                                            <div>{title}</div>
                                            <div>{category}</div>
                                            <div>{text}</div>
                                            <div>{date}</div>
                                    </li>
                        }
                       </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        categories: state.admin.categories,
        notes: state.admin.notes,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addNote: title => {
            dispatch(addNote(title));
        },
        showAddNoteModal: val => {
            dispatch(showAddNoteModal(val));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);