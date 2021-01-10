import React, { useState } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { login } from '../redux/actions/userAction'

import './Login.css'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameChanged = (e) => {
        setUsername(e.target.value)
    }

    const passwordChanged = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(
            'http://localhost:5000/api/user/signin',
            {
                username,
                password
            }
        ).then(res => {
            if (res.data.accessToken) {
                const { username, accessToken, bookmarks } = res.data
                props.login(username, accessToken, bookmarks)
                setUsername('')
                setPassword('')
                props.history.push('/')
            }
        })
            .catch(err => {
                alert('Incorrect username or password')
            })

    }

    return (
        <div className='loginPage'>
            <div className='loginForm'>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input required type="text" value={username} onChange={usernameChanged} className='form-control' placeholder='Username' />
                    </div>
                    <div className='form-group'>
                        <input required type="password" value={password} onChange={passwordChanged} className='form-control' placeholder='Password' />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-primary btn-block'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, accessToken, bookmarks) => {
            dispatch(login(username, accessToken, bookmarks))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)