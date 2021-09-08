import React from 'react'
import Navbar from '../../components/Navbar'
import './register.css'
import fb from '../../img/icons/facebook.png'
import insta from '../../img/icons/instagram.png'
import twi from '../../img/icons/twitter.png'
import you from '../../img/icons/youtube.png'
import linkedin from '../../img/icons/linkedin.png'
import discord from '../../img/icons/discord.png'
import add from '../../img/icons/add.png'

function Register() {
    return (
        <>
        <Navbar/>
        <div className="main">
            <div className="register">
                <div className="registerForm">
                    <h3> Création d'un nouveau profil</h3>
                    <input type="text" placeholder="Nom d'utilisateur"/>
                    <div className="typeUser">
                        <label htmlFor="name">Type d'utilisateur:</label>
                        <select className="type" name="type" id="type" placeholder="type">
                                <option value="partenaire">Partenaire</option>
                                <option value="studio">Studio</option>
                                <option value="expert">Expert</option>
                                <option value="sponsor">Sponsor</option>
                        </select>
                    </div>
                        <input type="email" placeholder="Email"/>
                        <input type="number" placeholder="Téléphone"/>
                    <div className="adress">
                        
                            <input type="text" className="rue" placeholder="Rue"/>
                            <input type="number" className="num" id="num" placeholder="Numéro"/>
                            <input type="text" className="boite" id="box" placeholder="Boite"/>
                    </div>
                    <div className="adress2">
                        <input type="number" className="cp" placeholder="Code postal"/>
                        <input type="text" className="comm" placeholder="Commune"/>
                    </div>
                    <div>
                        <button className="ico">
                           <img src= {fb} alt="fb" className="icone"/>
                        </button>
                        <button className="ico">
                           <img src= {insta} alt="fb" className="icone"/>
                        </button>
                        <button className="ico">
                           <img src= {twi} alt="fb" className="icone"/>
                        </button>
                        <button className="ico">
                           <img src= {you} alt="fb" className="icone"/>
                        </button>
                        <button className="ico">
                           <img src= {linkedin} alt="fb" className="icone"/>
                        </button>
                        <button className="ico">
                           <img src= {discord} alt="fb" className="icone"/>
                        </button>
                    </div>
                    <input type="text" placeholder="Média Social"/>
                    <input type="text" placeholder="Site Web"/>
                    <div className="members">
                        <input className="member" type="text" placeholder="Membre "/>
                        <input className="member" type="text" placeholder="Fonction"/>
                        <button className="addingBut"> 
                        <img src= {add} alt="fb" className="add" />
                        </button>
                    </div>
                    <input type="text" placeholder="jeux a leur actif"/>
                    <textarea type="text" placeholder="commentaires"/>
                    <button className="create">Créer</button>

                   
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
