import React from 'react'
import './Navbar.css'
import logo from "../img/LogoB.png"
import create from "../img/icons/create.svg"
import home from "../img/icons/home.svg"
import user from "../img/icons/user.svg"
import discord from "../img/icons/discord.png"


function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="https://gamemax.be/"> <img src={logo} alt="logo" className="logoSign"/> </a>
                <a href="https://discord.gg/3zvxBnz3"> <img src={discord} alt="discord" className="discord"/> </a>
                
            </div>
            <div className="icons">
                <a href="/create"> <img src={create} alt="create" className="create" /> </a>
                <a href="/profil"> <img src={user} alt="users" className="users" /> </a>
                <a href="/home"> <img src={home} alt="home" className="home" /> </a>
                
            </div>

        </div>
    )
}

export default Navbar
