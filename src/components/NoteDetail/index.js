import React from 'react';
import css from './noteDetail.module.css';

class NoteDetail extends React.Component{
    render() {
        const {title, text, category, date} = this.props;
        return(
            <div className={css.wrap}>
                <div className={css.title}>{title}</div>
                <div className={css.category}>{category}</div>
                <div className={css.text}>{text}</div>
                <div className={css.date}>{date}</div>
            </div>
        )
    }
}

export default NoteDetail;