import React from 'react';
import css from './buttons.module.css';
import {connect} from 'react-redux';
import {showAddCategoryMoadal, showAddNoteModal} from '../../modules/actions';

class Buttons extends React.Component{

    openShowAddCategoryMoadal = () => {
        const {showAddCategoryMoadal} = this.props;
        showAddCategoryMoadal(true);
    }

    openShowAddNoteMoadal = () => {
        const {showAddNoteModal} = this.props;
        showAddNoteModal(true);
    }

    render() {
        return(
            <div className={css.row}>
                <button 
                onClick={this.openShowAddCategoryMoadal} 
                className={css.button}>Добавить категорию</button>

                <button
                onClick={this.openShowAddNoteMoadal} 
                className={css.button}>Добавить запись</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        addCategoryModalShow: state.admin.modals.addCategoryModalShow,
        addNoteModalShow: state.admin.modals.addNoteModalShow
    }
}
const mapDispatchToProps = dispatch => {
    return{
        showAddCategoryMoadal: val => {
            dispatch(showAddCategoryMoadal(val));
        },
        showAddNoteModal: val => {
            dispatch(showAddNoteModal(val));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);