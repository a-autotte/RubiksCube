import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="login">
            <div className="login__container">
                <h5> Emails </h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5> Password </h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
        </div>
    )
}

export default Login;
