import React from 'react';
import {useParams} from 'react-router-dom';
import css from './categorie.module.css';

const Categorie = ({name}) => {
    let {id} = useParams();
    console.log(id);
    
    return(
        <li className={name === id ? css.active : css.item}>{name}</li>
    )
}


export default Categorie;