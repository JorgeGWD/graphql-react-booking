import React, { useState } from 'react';
import './Auth.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const switchModeHandles = () => {
        setIsLogin(prevIsLogin => !prevIsLogin);
    };

    const submitHandler = event => {
        event.preventDefault();

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        let requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        }

        if(!isLogin) {
            requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {email: "${email}", password: "${password}"}) {
                            _id
                            email
                        }
                    }
                `,
            };
        }

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <form className='auth-form' onSubmit={submitHandler}>
            <div className='auth-form__control'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='auth-form__control'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='auth-form__actions'>
                <button type='submit'>Submit</button>
                <button type='button' onClick={switchModeHandles}>
                    Switch to {isLogin ? 'Signup' : 'Login'}
                </button>
            </div>
        </form>
    );
};

export default AuthPage;