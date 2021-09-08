import React from 'react'
import logo from '../../img/logo2.png'
import controller from '../../img/gamepad.png'
import './Login.css'


function Login() {
    return (
        
        <div>
             <header className="App-header">
        <div className="logoLog">
        <img src={logo} className="App-logo" alt="logo" />

        <img src={controller} className="App-controller" alt="controller" />
        </div>
        <form className="login" onSubmit>
         
         <div className="form-group">
            <input autoFocus placeholder="User Name" type="email" name="email" id="email"  />
        </div> 
        <div className="form-group">
            <input placeholder="Password" type="Password" name="password" id="password"  />
        </div> 
        <button className="button" type="submit">LOGIN</button>
        <a className="registerLink" href="/register">  SIGN UP </a>
      </form>
        <div>
        <img src={controller} className="App-controller2" alt="controller" />
        </div>
          </header>
      )
        </div>
        
    )
}

export default Login
