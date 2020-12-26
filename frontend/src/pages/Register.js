import React, {useState} from 'react'

import './Register.css'

const Register = () => {

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

    return (
        <div className='registerPage'>
            <div className='registerForm'>
                <h1>Register</h1>
                <form onSubmit={() => alert(`idiota1: ${username} idiota2:${password} idiota3: ${email}`)}>
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