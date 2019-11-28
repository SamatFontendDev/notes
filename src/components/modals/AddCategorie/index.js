import React from 'react';
import css from './addCategorie.module.css';
import {connect} from 'react-redux';
import {addCategory, showAddCategoryMoadal} from '../../../modules/actions';


class AddCategorie extends React.Component{
    state = {
        name: ''
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddCategory = () => {
        const {name} = this.state;
        const {addCategory} = this.props;
        addCategory(name);
        this.setState({name: ''})
    }

    closeAddCategoryModal = () => {
        const {showAddCategoryMoadal} = this.props;
        showAddCategoryMoadal(false);
    }
    
   render() {
        const {name} = this.state;
       
        return(
            <div>
                <div className='overlay'></div>
                <div className={css.modalWrap}>
                    <div className={css.title}>Добавить категорию</div>
                    <div className={css.form}>
                        <div className={css.row}>
                            <input 
                            type='text' 
                            className={css.input}
                            name='name'
                            value={name}
                            onChange={this.handleInput}
                            placeholder='Название категории'
                            />
                        </div>
                        <div className={css.row}>
                            <button 
                            onClick={this.onAddCategory} 
                            className={css.button}>Добавить</button>
                            <button 
                            onClick={this.closeAddCategoryModal} 
                            className={css.button}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        categories: state.admin.categories
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addCategory: title => {
            dispatch(addCategory(title));
        },
        showAddCategoryMoadal: val => {
            dispatch(showAddCategoryMoadal(val));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategorie);