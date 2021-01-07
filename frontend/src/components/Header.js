import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../redux/actions/userAction'

import { Link } from 'react-router-dom'

const Header = (props) => {


    const loginLink = () => {
        return (
            <>
                <li className='nav-item'>
                    <Link className='nav-link' to='/bookmark'>Bookmark</Link>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' onClick={props.logout} href="/">Log Out</a>
                </li>
            </>
        )
    }

    const registerLink = () => {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Log In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Manga King</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            localStorage.getItem('user') ?
                                loginLink() : registerLink()
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)