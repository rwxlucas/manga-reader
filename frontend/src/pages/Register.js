import React, { useState } from 'react'

import axios from 'axios'

import './Register.css'

const Register = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const usernameChanged = (e) => {
        setUsername(e.target.value)
    }

    const passwordChanged = (e) => {
        setPassword(e.target.value)
    }

    const emailChanged = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(
            'http://localhost:5000/api/user/signup',
            {
                username,
                password,
                email
            }
        ).then(res => {
            setUsername('')
            setPassword('')
            setEmail('')
            props.history.push('/login')
        }).catch(err => alert(err))
    }

    return (
        <div className='registerPage'>
            <div className='registerForm'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input required type="text" value={username} onChange={usernameChanged} className='form-control' placeholder='Username' />
                    </div>
                    <div className='form-group'>
                        <input required type="text" value={email} onChange={emailChanged} className='form-control' placeholder='Email' />
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

export default Register