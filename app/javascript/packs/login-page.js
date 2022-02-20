import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactDom from 'react-dom'

const LoginPage = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


const handleLoginId = (event) => {
  event.persist();
  setLoginId(event.target.value);
}

const handlePassword = (event) => {
  event.persist();
  setPassword(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('/login', {login_id: loginId, password: password})
    .then(res =>{
      setMessage(false);
      localStorage.setItem("token", res.data.jwt);
      window.location.replace('/');
    }).catch(err => {
      setMessage(true)
    })
}

return (
  <div className='login-screen'>
    <div className='inner-screen'>
      <form>
        { message && <p style={{color: 'red'}}>Invalid username or password</p> }
        <input
          id="login-id"
          className="login-form"
          type="text"
          placeholder="Login ID"
          name="loginId"
          value={loginId}
          onChange={handleLoginId}
        />
        <input
          id="password"
          className="login-form"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button className='submit-button' onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  </div>
)}

ReactDom.render(<LoginPage/>, document.querySelector('.login-page'));
