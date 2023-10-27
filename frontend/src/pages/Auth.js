import React from 'react'
import './Auth.css'

const AuthPage = () => {
  return (
    <form className='auth-form'>
      <div className='auth-form__control'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' />
      </div>
      <div className='auth-form__control'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
      </div>
      <div className='auth-form__actions'>
        <button type='submit'>Submit</button>
        <button type='button'>Switch to Singup</button>
      </div>
    </form>
  )
}

export default AuthPage