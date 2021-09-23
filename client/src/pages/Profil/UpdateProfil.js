import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Axios from 'axios'
import './Profil.css'



function UpdateProfil() {

    const id_user = localStorage.getItem("userId")
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    let history = useHistory()

    const update =() =>{

         Axios.put(`${process.env.REACT_APP_API_URL}/user/${id_user}`, {
            id_user: localStorage.getItem("userId"),
            username: username,
            email:email,
            phone:phone
        }).then (() =>{
        //history.push('/home')
        setInterval(function(){ history.push('/home') }, 500);
        })
        
    }

    return (
        <>
        <Navbar/>
        <form action="#" encType="multipart/form-data">
            <input className="inputPost" type="text" value={localStorage.getItem("username")} placeholder="Nom utilisateur" onChange={(e)=>{setUsername(e.target.value)}} />
            <input className="inputPost" type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input className="inputPost" type="text" placeholder="Téléphone" onChange={(e)=>{setPhone(e.target.value)}} />
            <button className="createPost" onClick={update}>Modifier</button>
        </form>
        </>
    )
}

export default UpdateProfil

