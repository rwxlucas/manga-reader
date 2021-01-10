const initialState = {
    name: '',
    alternative: '',
    author: '',
    genres: [],
    rating: 0,
    description: '',
    thumbnail: '',
    views: 0
}

const mangaInfoReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'GET_MANGA_INFO':
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default mangaInfoReducer