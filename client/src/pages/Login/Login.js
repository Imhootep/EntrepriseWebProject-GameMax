import React, {useState} from 'react'
import logo from '../../img/logo2.png'
import controller from '../../img/gamepad.png'
import './Login.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage ] = useState('')

    let history = useHistory();

    const login =(e) => {
      e.preventDefault();


      Axios.post("http://localhost:8000/user/login", 
      {username:username, 
        password:password
      })
      .then((response) =>{
        console.log(response)
          
        if (response.data.loggedIn) {
          
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", response.data.username);
          console.log(response.data.username)
          history.push('/home')
        } else {
          setErrorMessage(response.data.message);
        }

      });
    };

    return (
        
        <div>
             <header className="App-header">
               <div className="div-header">
               <div className="logoHeader">
                 <div className="div-logo">
                  <div className="logoLog">
                    <img src={logo} className="App-logo" alt="logo" />

                    <img src={controller} className="App-controller" alt="controller" />
                    <div>
                      <label>pas encore inscrit?</label>
                      <a className="registerLink" href="/register">SIGN UP</a>

                    </div>
                  </div>
                </div>
                <form className="login">
                
                  <div className="form-group">
                    <label className="fromLabel">Nom d'utilisateur</label>          
                      <input className="inputLogin" autoFocus placeholder="Username..." type="text"  onChange={(e)=>{setUsername(e.target.value)}} />
                  </div> 
                  <div className="form-group">
                  <label className="fromLabel">Mot de passe</label>  
                      <input className="inputLogin" placeholder="Password..." type="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
                  </div> 
                  <button className="loginBut" type="submit" onClick={login} >LOGIN</button>
                  
                  <h3>{errorMessage}</h3>
                </form>
                  <div className="controller2">
                  <img src={controller} className="App-controller2" alt="controller" />
                </div>
              </div>
              </div>
          </header>
      )
        </div>
        
    )
}

export default Login
