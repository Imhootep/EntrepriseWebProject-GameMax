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
            <input className="inputLogin" autoFocus placeholder="Username..." type="text"  onChange={(e)=>{setUsername(e.target.value)}} />
        </div> 
        <div className="form-group">
            <input className="inputLogin" placeholder="Password..." type="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
        </div> 
        <button className="loginBut" type="submit" onClick={login} >LOGIN</button>
        <a className="registerLink" href="/register">SIGN UP</a>
      </form>
        <div className="controller2">
        <img src={controller} className="App-controller2" alt="controller" />
        </div>
          </header>
      )
        </div>
        
    )
}

export default Login
