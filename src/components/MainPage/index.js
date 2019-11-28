import React from 'react';
import Header from '../Header';
import Categories from '../Categories';
import Notes from '../Notes';
import css from './mainPage.module.css';
import {useParams} from 'react-router-dom';



const MainPage = () => {
        let {id} = useParams();
        return(
            <div>
                <Header/>
                <div className={css.container}>
                    <div className={css.colLeft}>
                        <Categories/>
                    </div>
                    <div className={css.colRight}>
                        <Notes id={id}/>
                    </div>
                </div>
            </div>
        )
    
}

export default MainPage;