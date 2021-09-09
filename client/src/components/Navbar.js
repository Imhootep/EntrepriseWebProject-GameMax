import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../img/LogoB.png"
import create from "../img/icons/create.svg"
import home from "../img/icons/home.svg"
import user from "../img/icons/user.svg"
import discord from "../img/icons/discord.png"


function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect (() =>{
        setLoggedIn(localStorage.getItem("loggedIn"))
    }, [localStorage.getItem("loggedIn")])



    return (
        <div className="navbar">
            <div className="logoNav">
                <a href="https://gamemax.be/"> <img src={logo} alt="logo" className="logoSign"/> </a>
                <a href="https://discord.gg/3zvxBnz3"> <img src={discord} alt="discord" className="discord"/> </a>
                
            </div>
            
         {!loggedIn ? (
         <>
          <div className="icons">
                <div className="logoIcon">
                <a href="/create" className="iconLink"> <img src={create} alt="create" className="IconNav" /> </a>
                </div>
                <div className="logoIcon">
                <a href="/profil" className="iconLink"> <img src={user} alt="users" className="IconNav" /> </a>
                </div>
                <div className="logoIcon">
                <a href="/home" className="iconLink"> <img src={home} alt="home" className="IconNav" /> </a>
                </div>
                
            </div>
         </>
      ) : (
        <>
         
        </> 
      )}

            

        </div>
    )
}

export default Navbar
