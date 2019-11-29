import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import NoteDetail from '../NoteDetail';
import css from './notes.module.css';


class Notes extends React.Component{
    render() {
        const {notes, id} = this.props;
        let filteredNotes = notes;
        let detail = filteredNotes.filter(elem => elem.date === id);

        if (id) {
            filteredNotes = filteredNotes.filter((elem) => elem.category === id);
        }

        if(!filteredNotes.length && notes.length) {
            return <NoteDetail 
            title={detail[0].title} 
            text={detail[0].text} 
            category={detail[0].category} 
            date={detail[0].date} />
        }

        return (
            <div className={css.wrap}>
                <div className={css.title}>Записи:</div>
                <ul>
                    {filteredNotes.map((elem, index) => {
                            return(
                                <Link to={`/${elem.date}`}>
                                    <li className={css.item} key={index}>
                                        <div>{elem.title}</div>
                                        <div>{elem.category}</div>
                                        <div>{elem.text}</div>
                                        <div>{elem.date}</div>
                                    </li>
                                </Link>
                            )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes: state.admin.notes
    }
}

export default connect(mapStateToProps)(Notes);