import React, { useEffect } from 'react'

import Header from './components/Header'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Manga from './pages/Manga'
import ReadManga from './pages/ReadManga'
import Bookmark from './pages/Bookmark'

import { Route } from 'react-router-dom'

import store from './redux/store'
import { Provider } from 'react-redux'

import './App.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap/dist/css/bootstrap.min.css";

const App = props => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    return (
        <Provider store={store}>
            <div className='appDiv'>
                <Header />
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/register'} component={Register} />
                <Route exact path={'/login'} component={Login} />
                <Route path={'/manga'} component={Manga} />
                <Route path={'/readmanga'} component={ReadManga} />
                <Route path={'/bookmark'} component={Bookmark} />
            </div>
        </Provider>
    )
}

export default App