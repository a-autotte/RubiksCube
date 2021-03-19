import React, {useState} from 'react'
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                 history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const registerButton = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {

            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    

    return (
        <div className="login">

            <div className='login__container'>
                <h1> Sign-in </h1>

                <form>
                    <h5> E-mails </h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5> Password </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <h5> Pseudo </h5>
                    <input type="text" value={pseudo} onChange={e => setPseudo(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton"> Sign In </button>
                </form>

                <p>
                    By signing-in you agree to the website
                    Conditions of Use & Sale. Please see our privacy Notice,
                    Our Cookies Notice and our Interest Based Ads Notice. 
                </p>

                <button onClick={registerButton} className="login__registerButton"> Create your player account </button>
            </div>
        </div>
    )
}

export default Login;
