<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
import Navbar from '../../components/Navbar'
import './register.css'
import fb from '../../img/icons/facebook.png'
import insta from '../../img/icons/instagram.png'
import twi from '../../img/icons/twitter.png'
import you from '../../img/icons/youtube.png'
import linkedin from '../../img/icons/linkedin.png'
import discord from '../../img/icons/discord.png'
import add from '../../img/icons/add.png'
<<<<<<< HEAD

function Register() {
=======
import git from '../../img/icons/github.png'


import Axios from 'axios'



function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [rue, setRue] = useState('')
    const [number, setNumber] = useState('')
    const [box, setBox] = useState('')
    const [cp, setCp] = useState('')
    const [commune, setCommune] = useState('')
    const [social, setSocial] = useState('')
    const [website, setwebsite] = useState('')
    const [member, setMember] = useState('')
    const [games, setGames] = useState('')
    const [comment, setComment] = useState('')


    const register =() => {
        Axios.post("http://localhost:3001/user/register", 
        {username:username, 
         password:password,
         email:email,
         phone:phone,
         rue:rue,
         number:number,
         box:box,
         cp:cp,
         commune:commune,
         social:social,
         website:website,
         member:member,
         game:games,
         comment:comment
        }).then((response) =>{
            console.log(response)
        });
    };

>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
    return (
        <>
        <Navbar/>
        <div className="main">
            <div className="register">
                <div className="registerForm">
<<<<<<< HEAD
                    <h3> Création d'un nouveau profil</h3>
                    <input type="text" placeholder="Nom d'utilisateur"/>
                    <div className="typeUser">
                        <label htmlFor="name">Type d'utilisateur:</label>
                        <select className="type" name="type" id="type" placeholder="type">
=======
                    <h3> nouveau profil</h3>
                <input type="text" placeholder="Nom d'utilisateur" onChange={(e)=>{setUsername(e.target.value)}} />
                    <input type="password" placeholder="Mot de passe" onChange={(e)=>{setPassword(e.target.value)}}/>
                    {/* <div className="typeUser">
                        <label htmlFor="name">Type d'utilisateur:</label>
                        <select className="type" name="type" id="type">
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
                                <option value="partenaire">Partenaire</option>
                                <option value="studio">Studio</option>
                                <option value="expert">Expert</option>
                                <option value="sponsor">Sponsor</option>
                        </select>
<<<<<<< HEAD
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
=======
                    </div> */}
                        <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="number" placeholder="Téléphone" onChange={(e)=>{setPhone(e.target.value)}}/>
                    <div className="adress">
                        
                            <input type="text" className="rue" placeholder="Rue" onChange={(e)=>{setRue(e.target.value)}}/>
                            <input type="number" className="num" id="num" placeholder="Numéro" onChange={(e)=>{setNumber(e.target.value)}}/>
                            <input type="text" className="boite" id="box" placeholder="Boite" onChange={(e)=>{setBox(e.target.value)}}/>
                    </div>
                    <div className="adress2">
                        <input type="number" className="cp" placeholder="Code postal" onChange={(e)=>{setCp(e.target.value)}}/>
                        <input type="text" className="comm" placeholder="Commune" onChange={(e)=>{setCommune(e.target.value)}}/>
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
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
<<<<<<< HEAD
                    </div>
                    <input type="text" placeholder="Média Social"/>
                    <input type="text" placeholder="Site Web"/>
                    <div className="members">
                        <input className="member" type="text" placeholder="Membre "/>
=======
                        <button className="ico">
                           <img src= {git} alt="fb" className="icone"/>
                        </button>
                    </div>
                    <input type="text" placeholder="Média Social" onChange={(e)=>{setSocial(e.target.value)}}/>
                    <input type="text" placeholder="Site Web" onChange={(e)=>{setwebsite(e.target.value)}}/>
                    <div className="members">
                        <input className="member" type="text" placeholder="Membre" onChange={(e)=>{setMember(e.target.value)}}/>
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
                        <input className="member" type="text" placeholder="Fonction"/>
                        <button className="addingBut"> 
                        <img src= {add} alt="fb" className="add" />
                        </button>
                    </div>
<<<<<<< HEAD
                    <input type="text" placeholder="jeux a leur actif"/>
                    <textarea type="text" placeholder="commentaires"/>
                    <button className="create">Créer</button>
=======
                    <input type="text" placeholder="jeux a leur actif" onChange={(e)=>{setGames(e.target.value)}}/>
                    <textarea type="text" placeholder="commentaires" onChange={(e)=>{setComment(e.target.value)}}/>
                    <button className="createUser" onClick={register} >Créer</button>
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9

                   
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
