<<<<<<< HEAD
import React from 'react'


function Login() {
    return (
        
        <div>
            LogIn page
=======
import React, {useState} from 'react'
import logo from '../../img/logo2.png'
import controller from '../../img/gamepad.png'
import './Login.css'
import Axios from 'axios'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login =() => {
      Axios.post("http://localhost:3001/user/login", 
      {username:username, 
        password:password
      })
      .then((response) =>{
        console.log(response)
      });
    };

    return (
        
        <div>
             <header className="App-header">
        <div className="logoLog">
        <img src={logo} className="App-logo" alt="logo" />

        <img src={controller} className="App-controller" alt="controller" />
        </div>
        <form className="login" onSubmit>
         
         <div className="form-group">
            <input autoFocus placeholder="Username..." type="text" name="username" id="username" onChange={(e)=>{setUsername(e.target.value)}} />
        </div> 
        <div className="form-group">
            <input placeholder="Password..." type="Password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} />
        </div> 
        <button className="loginBut" type="submit" onClick={login} >LOGIN</button>
        <a className="registerLink" href="/register">  SIGN UP </a>
      </form>
        <div>
        <img src={controller} className="App-controller2" alt="controller" />
        </div>
          </header>
      )
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
        </div>
        
    )
}

export default Login
