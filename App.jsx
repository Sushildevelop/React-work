import { useState } from 'react';

import './App.css'
import logo from './assets/Login.avif'

function App() {
 const [login,setlogin]=useState(true)

 const loginSwitch=()=>{
  setlogin(!login)
 }

  return (
    <div className="container">
      <div className="small-cont">
        <img src={logo} alt="" />
        <input hidden={login} type="text"  name='' placeholder='Mobile Number or Email'/>
        <input hidden={login}     type="text"  name='' placeholder='Full Name'/>
        <input type="email"  name='' placeholder='Phone number, username, or email'/>
        <input type="password"  name='' placeholder='Password'/>
        <button className='btn'>{login?"Sign In":"Sign Up"}</button>

        <div id="footer">
          {login?"Don't Have account?":"Have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
        </div>
      </div>
    </div>

  )
}

export default App;
