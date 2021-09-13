import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import './register.css'
import add from '../../img/icons/add.png'
// import fb from '../../img/icons/facebook.png'
// import insta from '../../img/icons/instagram.png'
// import twi from '../../img/icons/twitter.png'
// import you from '../../img/icons/youtube.png'
// import linkedin from '../../img/icons/linkedin.png'
// import discord from '../../img/icons/discord.svg'
// import git from '../../img/icons/github.png'


import Axios from 'axios'


function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [box, setBox] = useState('')
    const [cp, setCp] = useState('')
    const [commune, setCommune] = useState('')
    const [social, setSocial] = useState('')
    const [website, setwebsite] = useState('')
    const [member, setMember] = useState('')
    const [games, setGames] = useState('')
    const [comment, setComment] = useState('')


    const [role, setRole] = useState('partenaire');
    const handleChange = function (e){
        e.preventDefault() /* ??? */
        setRole(e.target.value)
    }


    const register =() => {
        Axios.post("http://localhost:8000/user/register", 
        {username:username, 
         password:password,
         email:email,
         phone:phone,
         street:street,
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

    return (
        <>
        <Navbar/>
        <div className="mainRegister">
            <div className="register">
                <div className="registerForm">
                    <h3> Nouveau profil   - {role}</h3>
                    <input type="text" placeholder="Nom d'utilisateur" onChange={(e)=>{setUsername(e.target.value)}} />
                    <input type="password" placeholder="Mot de passe" onChange={(e)=>{setPassword(e.target.value)}}/>
                     <div className="typeUser">
                        <label className="userType" htmlFor="name">Type d'utilisateur:</label>
                        <select className="type" name="type" id="type" value={role} onChange={handleChange}>
                                <option value="partenaire">Partenaire</option>
                                <option value="studio">Studio</option>
                                <option value="expert">Expert</option>
                                <option value="sponsor">Sponsor</option>
                        </select>
                    </div> 
                    <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="number" placeholder="Téléphone" onChange={(e)=>{setPhone(e.target.value)}}/>
                    {/*<div className="adress"> */}
                        <input type="text" className="rue" placeholder="Rue" onChange={(e)=>{setStreet(e.target.value)}}/>
                        <div className="addressNumbers">
                            <input type="number" className="num" id="num" placeholder="Numéro" onChange={(e)=>{setNumber(e.target.value)}}/>
                            <input type="text" className="boite" id="box" placeholder="Boite" onChange={(e)=>{setBox(e.target.value)}}/>
                            <input type="number" className="cp" placeholder="Code postal" onChange={(e)=>{setCp(e.target.value)}}/>
                        </div>
                        <input type="text" className="comm" placeholder="Localité" onChange={(e)=>{setCommune(e.target.value)}}/>
                    {/*</div>*/}
                    
                    <div className="buttonContainer">
                        <button className="ico">
                            {/* <img src= {fb} alt="fb" className="icone"/> */}
                            <svg className="icone"><path d="M13.5 5.313q-1.125 0-1.781.375t-.844.938-.188 1.438v3.938H16l-.75 5.688h-4.563v14.313H4.812V17.69H-.001v-5.688h4.813v-4.5q0-3.563 2-5.531T12.125.002q2.688 0 4.375.25v5.063h-3z"></path></svg>
                        </button>
                        <button className="ico">
                            {/* <img src= {insta} alt="insta" className="icone"/> */}
                            <svg className="icone"><path d="M2.5 2h24.875v17.125l-7.313 7.313h-5.438l-3.563 3.563h-3.75v-3.563H.623V6.813zm22.375 15.875V4.5H4.812v17.563h5.625v3.563L14 22.063h6.688zm-4.187-8.562v7.313h-2.5V9.313h2.5zm-6.688 0v7.313h-2.5V9.313H14z"></path></svg>
                        </button>
                        <button className="ico">
                            {/* <img src= {twi} alt="twitter" className="icone"/> */}
                            <svg className="icone"><path d="M28.688 9.5q.063.25.063.813 0 3.313-1.25 6.594t-3.531 6-5.906 4.406-8 1.688q-5.5 0-10.063-2.938.688.063 1.563.063 4.563 0 8.188-2.813-2.188 0-3.844-1.281t-2.281-3.219q.625.063 1.188.063.875 0 1.75-.188-1.5-.313-2.688-1.25t-1.875-2.281-.688-2.906v-.125q1.375.813 2.938.875-2.938-2-2.938-5.5 0-1.75.938-3.313Q4.69 7.251 8.221 9.063t7.531 2q-.125-.75-.125-1.5 0-2.688 1.906-4.625T22.127 3q2.875 0 4.813 2.063 2.25-.438 4.188-1.563-.75 2.313-2.875 3.625 1.875-.25 3.75-1.063-1.375 2-3.313 3.438z"></path></svg>
                        </button>
                        <div className="displayBlock"></div>
                        <button className="ico">
                            {/* <img src= {you} alt="youtube" className="icone"/> */}
                            <svg className="icone"><path d="M34.375 7.75q.188.75.344 1.875t.219 2.219.094 2.031.031 1.563v.563q0 5.625-.688 8.313-.313 1.063-1.125 1.875t-1.938 1.125q-1.188.313-4.5.469t-6.063.219h-2.75q-10.688 0-13.313-.688-2.438-.688-3.063-3-.313-1.188-.469-3.281t-.219-3.531v-1.5q0-5.563.688-8.25.313-1.125 1.125-1.938t1.938-1.125q1.188-.313 4.5-.469t6.063-.219h2.75q10.688 0 13.313.688 1.125.313 1.938 1.125t1.125 1.938zM14.5 21.125L23.438 16 14.5 10.937v10.188z"></path></svg>
                        </button>
                        <button className="ico">
                            {/* <img src= {discord} alt="discord" className="icone"/> */}
                            <svg className="icone"><path d="M18.563 15.188q0 .75-.469 1.281T16.938 17q-.438 0-.813-.25t-.594-.656-.219-.906q0-.375.125-.688t.344-.563.531-.375.625-.125q.688 0 1.156.5t.469 1.25zm-7.438-1.75q.688 0 1.156.5t.469 1.25-.469 1.281-1.156.531-1.156-.531-.469-1.281.469-1.25 1.156-.5zM28 3.313v28.688q-3.625-3.188-7.438-6.75l.875 3H3.249q-1.313 0-2.281-.969t-.969-2.344V3.313q0-1.375.969-2.344T3.249 0h21.5q1.313 0 2.281.969t.969 2.344zm-4.562 15.125q0-2.25-.563-4.594t-1.188-3.531l-.563-1.188q-.625-.5-1.344-.844t-1.25-.5-.969-.25-.688-.094h-.25l-.188.25q1.188.375 2.188.906t1.375.844l.375.313q-2.75-1.563-6-1.625T8.435 9.25l-.938.5Q8.81 8.5 11.685 7.625l-.125-.188q-2.188 0-4.5 1.688-.25.5-.625 1.313t-1.031 3.281-.656 4.719q.125.313.469.688t1.594 1.063 2.813.688q.625-.688 1.063-1.313-.875-.25-1.594-.719t-.969-.844l-.25-.313q.125.063.281.156t.281.156l.125.063q2.125 1.188 4.719 1.406t5.281-.844q.938-.313 1.813-.938-.813 1.313-2.875 1.938l1.063 1.25q1 0 1.844-.281t1.375-.625.938-.688.531-.594z"></path></svg>
                        </button>
                        <button className="ico">
                            {/* <img src= {git} alt="git" className="icone"/> */}
                            <svg className="icone"><path d="M27.5 12.75q1.688 0 2.625 1.188t.656 2.719T29 18.938q.188.688.188 1.563 0 3.938-3.844 6.719T16 30.001q-3.563 0-6.594-1.281t-4.781-3.438-1.75-4.781q0-.813.188-1.5-1.563-.813-1.844-2.313t.656-2.719T4.5 12.75q1.375 0 2.375 1 3.563-2.5 8.5-2.688l1.938-8.625q.125-.563.688-.438l6.063 1.375q.75-1.375 2.188-1.375 1.063 0 1.781.719t.719 1.75-.719 1.75-1.781.719q-1 0-1.719-.719t-.719-1.719l-5.5-1.25-1.75 7.813q5 .188 8.563 2.625 1-.938 2.375-.938zM8.063 19.313q0 1 .75 1.719t1.75.719q.5 0 .969-.188t.781-.531.5-.781.188-.938q0-1.063-.719-1.781t-1.719-.719q-.688 0-1.25.344t-.906.906-.344 1.25zM21.5 25.125q.438-.375 0-.813t-.875 0q-1.313 1.313-4.656 1.313t-4.656-1.313q-.375-.438-.813 0t0 .813q1.688 1.75 5.469 1.75t5.531-1.75zm-.062-3.375q.688 0 1.25-.313t.906-.875.344-1.25q0-1.063-.75-1.781t-1.75-.719-1.719.75-.719 1.75.719 1.719 1.719.719z"></path></svg>
                        </button>
                        <button className="ico">
                            {/* <img src= {git} alt="git" className="icone"/> */}
                            <svg className="icone"><path d="M24.75 11.094q0 1.594-1.125 2.688t-2.719 1.094-2.688-1.094-1.094-2.688 1.094-2.719 2.688-1.125 2.719 1.125 1.125 2.719zm3.25.031q0 2.938-2.094 5.031t-5.031 2.094l-6.813 4.938q-.188 2.063-1.719 3.438t-3.594 1.375q-.875 0-1.75-.313t-1.563-.875-1.156-1.344-.656-1.656l-3.625-1.438v-6.688l6.063 2.438q1.438-.875 3.25-.75l4.438-6.313q.063-2.938 2.125-5t5-2.063q1.938 0 3.594.938t2.594 2.594.938 3.594zM12.688 22.688q0-1.625-1.125-2.781T8.75 18.751q-.375 0-.813.125l1.625.625q1.188.5 1.688 1.688t.031 2.375-1.656 1.688-2.375 0q-.25-.063-.906-.344t-1.031-.406q1.125 2.125 3.438 2.125 1.688 0 2.813-1.156t1.125-2.781zm12.937-11.594q0-1.969-1.375-3.344t-3.375-1.375q-1.25 0-2.375.625t-1.75 1.719-.625 2.406q0 1.938 1.406 3.344t3.344 1.406q2 0 3.375-1.406t1.375-3.375z"></path></svg>
                        </button>
                    </div>
                    <input type="text" placeholder="Média Social" onChange={(e)=>{setSocial(e.target.value)}}/>
                    <input type="text" placeholder="Site Web" onChange={(e)=>{setwebsite(e.target.value)}}/>
                    <div className="members">
                        <input className="member" type="text" placeholder="Membre" onChange={(e)=>{setMember(e.target.value)}}/>
                        <input className="function" type="text" placeholder="Fonction"/>
                        <button className="addingButton"> 
                            <img src= {add} alt="fb" className="add" />
                        </button>
                    </div>
                    <input type="text" placeholder="jeux a leur actif" onChange={(e)=>{setGames(e.target.value)}}/>
                    <textarea type="text" placeholder="commentaires" onChange={(e)=>{setComment(e.target.value)}}/>
                    <button className="createUser" onClick={register} >Créer</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
