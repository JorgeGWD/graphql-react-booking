import { useState } from 'react';
import './Auth.css';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (email.trim().length === 0 || password.trim().length === 0) {
        return;
        }

        console.log(email, password);
    };

    return (
        <form className='auth-form' onSubmit={submitHandler}>
        <div className='auth-form__control'>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='auth-form__control'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='auth-form__actions'>
            <button type='submit'>Submit</button>
            <button type='button'>Switch to Signup</button>
        </div>
        </form>
    );
};

export default AuthPage;