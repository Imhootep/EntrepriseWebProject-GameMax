import React, {useState, useContext} from 'react';
import LoginForm from '../Components/LoginForm'
import controller from '../img/gamepad.png'
import logo from '../img/logo2.png'
import Home from './Home';
import userContext from '../userContext';

function Login () {
    const adminUser ={
        name:"François",
        email:"fb@admin.com",
        password:"test"
      }
  
      const {user, updateUser} = useContext(userContext)
  
      
      const [error, setError]= useState("");
  
      const signin = details => {
        console.log(details);
  
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("Logged in")
          updateUser({
            email:details.email,
            name: details.email
          })
        } else {
          console.log("Details do not match")
          setError("Email ou Mot de passe incorrect" )
        }
      }
  
      // const Logout =()=>{
      //   setUser({name:"", email:""});
      // }
  
    return (
      <div className="App">
        {(user.email === adminUser.email) ?(
            <div className="welcome">
              <Home />
              
            </div>
        ) : (
          <header className="App-header">
          <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
  
          <img src={controller} className="App-controller" alt="controller" />
          </div>
            <LoginForm Login={signin} error={error}/>
          <div>
          <img src={controller} className="App-controller2" alt="controller" />
          </div>
            </header>
        )}
        
  
        </div>
    );
};

export default Login;