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
<<<<<<< HEAD
            <div className="logo">
=======
            <div className="logoNav">
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
                <a href="https://gamemax.be/"> <img src={logo} alt="logo" className="logoSign"/> </a>
                <a href="https://discord.gg/3zvxBnz3"> <img src={discord} alt="discord" className="discord"/> </a>
                
            </div>
            <div className="icons">
<<<<<<< HEAD
                <a href="/create"> <img src={create} alt="create" className="create" /> </a>
                <a href="/profil"> <img src={user} alt="users" className="users" /> </a>
                <a href="/home"> <img src={home} alt="home" className="home" /> </a>
=======
                <div className="logoIcon">
                <a href="/create" className="iconLink"> <img src={create} alt="create" className="IconNav" /> </a>
                </div>
                <div className="logoIcon">
                <a href="/profil" className="iconLink"> <img src={user} alt="users" className="IconNav" /> </a>
                </div>
                <div className="logoIcon">
                <a href="/home" className="iconLink"> <img src={home} alt="home" className="IconNav" /> </a>
                </div>
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
                
            </div>

        </div>
    )
}

export default Navbar
