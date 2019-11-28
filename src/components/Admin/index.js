import React from 'react';
import Header from '../Header';
import Buttons from '../Buttons';
import AdminNotes from '../AdminNotes';
import AddNote from '../modals/AddNote';
import AddCategotyModal from '../modals/AddCategotyModal';
import AddNoteModal from '../modals/AddNoteModal';
import AddCategorie from '../modals/AddCategorie';



class Admin extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <Buttons/>
                <AddCategotyModal>
                    <AddCategorie/>
                </AddCategotyModal>
                <AddNoteModal>
                    <AddNote/>
                </AddNoteModal>
                <AdminNotes/>
            </div>
        )
    }
}

export default Admin;