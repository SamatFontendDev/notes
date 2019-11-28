import React from 'react';
import {connect} from 'react-redux';
import {changeNote} from '../../modules/actions';
import css from './changeNote.module.css';

class ChangeNote extends React.Component{
    state = {
        title: '',
        text: '',
        category: '',
        date: this.props.date
    }

    changeField = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeNote = () => {
        const {changeNote} = this.props;
        changeNote(this.state);
    }

    render() {
        const {edit, categories} = this.props;
        if (edit) {
            return(
                <div className={css.edit}>
                    <input 
                    value={this.state.title}
                    className={css.input}
                    name='title'
                    onChange={this.changeField}
                    />
                    <textarea 
                    className={css.textarea}
                    onChange={this.changeField}
                    name='text'
                    >{this.state.text}</textarea>
                    <select
                    name='category' 
                    className={css.select}
                    value={this.state.categoty}
                    onChange={this.changeField}
                    >
                        {categories.map(elem =>  <option>{elem}</option>)}
                    </select>
                    <button 
                    onClick={this.onChangeNote}
                    className={css.button}>Изменить</button>
                </div>
            )
        } else {
            return null;
        }
        
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeNote: item => {
            dispatch(changeNote(item));
        }
    }
}

const mapStateToProps = state => {
    return{
        categories: state.admin.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangeNote);