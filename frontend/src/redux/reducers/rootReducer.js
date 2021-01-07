import {combineReducers} from 'redux'

import mangaInfoReducer from './mangaInfoReducer'
import userReducer from './userReducer'

export default combineReducers({
    user: userReducer,
    mangaInfo: mangaInfoReducer
})

