export const addCategory = item => {
    console.log(item);
    
    return {
        type: 'ADD_CATEGORY',
        payload: item
    }
};

export const addNote = note => {
    return {
        type: 'ADD_NOTE',
        payload: {
            title: note.title,
            text: note.text,
            category: note.category,
            date: note.date,
            show: note.show
        }
    }
};

export const showAddCategoryMoadal = val => {
    return{
        type: 'SHOW_ADD_CATEGORY_MODAL',
        payload: val
    }
};

export const showAddNoteModal = val => {
    return{
        type: 'SHOW_ADD_NOTE_MODAL',
        payload: val
    }
}

export const deleteNote = date => {
    return {
        type: 'DELETE_NOTE',
        payload: date
    }
}

export const changeNote = item => {
    return {
        type: 'CHANGE_NOTE',
        payload: {
            title: item.title,
            text: item.text,
            category: item.category,
            date: item.date
        }
    }
}
