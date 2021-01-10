import { addBookmark } from "../actions/userAction"

const initialState = {
    isLogged: false,
    username: '',
    bookmarks: []
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(payload.accessToken))
            return {
                ...state,
                isLogged: true,
                username: payload.username,
                bookmarks: payload.bookmarks
            }
        case 'LOGOUT':
            localStorage.removeItem('user')
            return {
                isLogged: false,
                username: ''
            }
        case 'ADD_BOOKMARK':
            let add = state.bookmarks
            add.push(payload)
            return {
                ...state,
                bookmarks: add
            }
        case 'REMOVE_BOOKMARK':
            let remove = state.bookmarks
            remove.splice(remove.indexOf(payload), 1)
            return {
                ...state,
                bookmarks: remove
            }
        default:
            return state
    }
}

export default userReducer