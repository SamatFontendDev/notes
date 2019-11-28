import React from 'react';
import css from './header.module.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render() {
        const location = window.location.pathname;
        return(
            <header className={css.header}>
                <nav>
                    <ul className={css.navList}>
                        <li className={css.navItem}>
                            <Link 
                            className={location === '/' ? css.active : css.link} 
                            to='/'>Главная</Link>
                        </li>
                        <li className={css.navItem}>
                            <Link 
                            className={location === '/admin' ? css.active : css.link} 
                            to='/admin'>Управление</Link>
                        </li>
                     </ul>
                </nav>
            </header>
        )
    }
}

export default Header;