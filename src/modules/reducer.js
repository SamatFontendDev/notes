export const initialState = {
    categories: [],
    notes: [],
    modals: {
        addCategoryModalShow: false,
        addNoteModalShow: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case 'ADD_NOTE':
            return{
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'SHOW_ADD_CATEGORY_MODAL':
            return{
                ...state,
                modals: {
                    addCategoryModalShow: action.payload
                }
            }
        case 'SHOW_ADD_NOTE_MODAL':
            return{
                ...state,
                modals: {
                    addNoteModalShow: action.payload
                }
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(el => el.date !== action.payload)
            }
        case 'CHANGE_NOTE':
            return{
                ...state,
                notes: [...state.notes.filter(el => el.date !== action.payload.date), action.payload]
            }
        case 'HIDE_NOTE':
            return{
                ...state,
                notes: [...state.notes.filter(el => el.date !== action.payload.date), action.payload]
            }
        default:
            return state
    }
}


export default reducer;