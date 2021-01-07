const login = (username, accessToken) => {
    return {
        type: 'LOGIN',
        payload: {
            username,
            accessToken
        }
    }
}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const userAction = {
    login,
    logout
}

module.exports = userAction