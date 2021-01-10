const login = (username, accessToken, bookmarks) => {
    return {
        type: 'LOGIN',
        payload: {
            username,
            accessToken,
            bookmarks
        }
    }
}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const addBookmark = (manga) => {
    return {
        type: 'ADD_BOOKMARK',
        payload: manga
    }
}

const removeBookmark = (manga) => {
    return {
        type: 'REMOVE_BOOKMARK',
        payload: manga
    }
}

const userAction = {
    login,
    logout,
    addBookmark,
    removeBookmark
}

module.exports = userAction