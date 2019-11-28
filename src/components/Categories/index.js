import React from 'react';
import css from './categories.module.css';
import Categorie from '../Categorie';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Categories extends React.Component{
    render() {
        const {categories} = this.props;
        
        return (
            <div>
                <div className={css.title}>Категории:</div>
                <ul>
                    {categories.map(elem => (
                        <Link to={`/categories/${elem}`}>
                            <Categorie name={elem}/>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        categories: state.admin.categories
    }
}

export default connect(mapStateToProps)(Categories);