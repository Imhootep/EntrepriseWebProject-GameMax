import React from 'react';
import './index.css';


const Navbar = () => {
    return (
        
        <div className="navbar">
            {/* <span className="input-group-btn">
            <Link to="/profil"> créer un profil </Link>
            </span>
            <span className="input-group-btn">
            <Link to="/event"> Events </Link>
            </span>
            <span className="input-group-btn">
            <Link to="/doc"> Documents </Link>
            </span>
            <span className="input-group-btn">
            <Link to="/home"> Home </Link>
            </span> */}
            <div>
            <img src={process.env.PUBLIC_URL + "img/logo.png"} className="logo-nav"/>
            </div>
            <span className="link">
                <a href="/event" className="link">Events-Docs</a>
            </span>   
             
            <span className="link">
                <a href="/profil" className="link">Créer nouveau profil</a>
            </span>   
            <span className="link">
                <a href="/home" className="link">Home</a>
            </span>
        </div>
        
    );
};

export default Navbar;