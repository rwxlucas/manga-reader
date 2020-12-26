import React, { useState } from 'react'
import axios from 'axios'
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
            if(res.data.accessToken){
                localStorage.setItem('user', JSON.stringify(res.data))
                setUsername('')
                setPassword('')
                props.history.push('/')
            }
        })
            .catch(err => {
                alert(err)
                setUsername('')
                setPassword('')
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

export default Login