import React, {useState} from 'react'
import logo from '../../img/logo2.png'
import controller from '../../img/gamepad.png'
import './Login.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage ] = useState('')

  let history = useHistory();

  const login =(e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/login", 
    {
      email:email, 
      password:password
    })
    .then((response) =>{
          console.log(response)
      if (response.data) {
          localStorage.setItem("JWT", response.data.signedJWT);
          localStorage.setItem("email", response.data.payload.email);
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
               {/* <div className="logoHeader"> */}
                 <div className="div-logo">
                  <div className="logoLog">
                    <img src={logo} className="App-logo" alt="logo" />

                    <img src={controller} className="App-controller" alt="controller" />
                    <div className="notYetRegistered">
                      <label className="notRegistered">Pas encore inscrit?</label>
                      <a className="registerLink" href="/register"><span>SIGN UP</span></a>

                    </div>
                  </div>
                </div>
                <form className="login">
                <h2 className="loginTitle">  GameMax Média, </h2>
                <h2 className="loginTitle2">le réseau social des créateurs de jeux vidéos belges!</h2>
                  <h2 className="signinTitle"> Sign In</h2>
                  <div className="form-group">
                    <label className="formLabel">E-mail</label>          
                      <input className="inputLogin" autoFocus placeholder="Entrez votre nom email..." type="email"  onChange={(e)=>{setEmail(e.target.value)}} />
                  </div> 
                  <div className="form-group">
                  <label className="formLabel">Mot de passe</label>  
                      <input className="inputLogin" placeholder="Entrez votre mot de passe..." type="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
                  </div> 
                  <button className="loginBut" type="submit" onClick={login} ><span>Sign In</span></button>
                  <h4>{errorMessage}</h4>
                </form>
                  <div className="controller2">
                  <img src={controller} className="App-controller2" alt="controller" />
                </div>
              {/* </div> */}
              </div>
          </header>
        </div>       
    )
}

export default Login