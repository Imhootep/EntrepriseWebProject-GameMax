import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../img/LogoB.png"
import create from "../img/icons/create.svg"
import home from "../img/icons/home.svg"
import user from "../img/icons/user.svg"
import discord from "../img/icons/discord.png"


function Navbar() {

    const [payload, setPayload] = useState(false)

    useEffect (() =>{
        setPayload(localStorage.getItem("payload"))
    }, [localStorage.getItem("payload")])



    return (
        <div className="navbar">
            <div className="logoNav">
                <a href="https://gamemax.be/"> <img src={logo} alt="logo" className="logoSign"/> </a>
                <a href="https://discord.gg/3zvxBnz3"> <svg className="discordLogo" xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-73.78506 -23 639.47052 138"><path d="M33.2 1.3H0v37.6l22.1 20V22.4H34c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5 9.7-11.2 9.7H0v21.2h33.2c17.8.1 34.5-8.8 34.5-29.4V31.2C67.7 10.4 51 1.3 33.2 1.3zm174.1 60.1V30.6c0-11.1 19.8-13.7 25.8-2.5l18.3-7.5C244.3 4.7 231.1 0 220.2 0c-17.8 0-35.4 10.4-35.4 30.6v30.8c0 20.3 17.6 30.6 35 30.6 11.2 0 24.6-5.6 32-20.1l-19.6-9.1c-4.8 12.4-24.9 9.4-24.9-1.4zm-60.6-26.6c-6.9-1.5-11.5-4-11.8-8.3.4-10.4 16.3-10.7 25.6-.8l14.7-11.4C166 3 155.6 0 144.8 0c-16.3 0-32.1 9.2-32.1 26.8 0 17.1 13 26.2 27.3 28.4 7.3 1 15.4 3.9 15.2 9-.6 9.6-20.2 9.1-29.1-1.8L112 75.8c8.3 10.7 19.6 16.2 30.2 16.2 16.3 0 34.4-9.5 35.1-26.8 1-22-14.8-27.5-30.6-30.4zM79.8 90.7h22.4V1.3H79.8zM457.5 1.3h-33.2v37.6l22.1 20V22.4h11.8c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5 9.7-11.2 9.7h-34v21.2h33.2c17.8.1 34.5-8.8 34.5-29.4V31.2c.1-20.8-16.6-29.9-34.4-29.9zM294.6 0c-18.4 0-36.7 10.1-36.7 30.7v30.6c0 20.5 18.4 30.7 36.9 30.7 18.4 0 36.7-10.2 36.7-30.7V30.7C331.5 10.2 313 0 294.6 0zM309 61.3c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.2-14.4-9.7V30.7c0-6.6 7-10.1 14-10.1 7.3 0 14.7 3.2 14.7 10.1zm102.8-30.6c-.5-21-14.7-29.4-33-29.4h-35.5v89.5H366V62.3h4l20.6 28.4h28L394.4 60c10.8-3.4 17.4-12.7 17.4-29.3zm-32.6 12.1H366V22.4h13.2c14.2 0 14.2 20.4 0 20.4z" fill="#fff"/></svg> </a>
                
            </div>
            
         {payload ? (
         <>
          <div className="icons">
                <div className="logoIcon">
                <a href="/upload" className="iconLink"> <img src={create} alt="create" className="IconNav" /> </a>
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
         {/* <div className="icons">
                <div className="logoIcon">
                <a href="/create" className="iconLink"> <img src={create} alt="create" className="IconNav" /> </a>
                </div>
                <div className="logoIcon">
                <a href="/profil" className="iconLink"> <img src={user} alt="users" className="IconNav" /> </a>
                </div>
                <div className="logoIcon">
                <a href="/home" className="iconLink"> <img src={home} alt="home" className="IconNav" /> </a>
                </div>
                
            </div> */}
        </> 
      )}

            

        </div>
    )
}

export default Navbar