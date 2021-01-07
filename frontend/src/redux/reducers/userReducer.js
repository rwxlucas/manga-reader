const initialState = {
    isLogged: false,
    username: ''
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(payload.accessToken))
            return {
                ...state,
                isLogged: true,
                username: payload.username
            }
        case 'LOGOUT':
            localStorage.removeItem('user')
            return {
                isLogged: false,
                username: ''
            }
        default:
            return state
    }
}

export default userReducer