import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'
import "./Profil.css"
import UserProfil from '../../components/UserProfil'

function Profil() {

    const [users, setUsers] = useState([])
    

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
            setUsers(response.data);
            console.log(response.data);
/* --- pas au bon endroit
            for(let i in response.data){
                //console.log(response.data[i]);
                console.log(response.data[i].username);
                if(response.data[i].id == localStorage.userId){
                    console.log("le bon "+response.data[i].username);
                }
             }*/

        })
    }, []);
    

    



    return (
    <>
        <Navbar/>
        <div>
            <UserProfil/>
            <hr/>
            <h5> profil des autres utilisateurs </h5>
            <div className="ensProfil">
            
        {users.map((val)=>{
                    return(
                        
          <div className="showProfil">
              
              <div className="postProfil" key={val.id}>
              
            <div>Nom d'utilisateur : {val.username }</div>
            <div>Email : {val.email }</div>
            <div>Téléphone : {val.phone }</div>
            <div>Adresse : {val.street }</div>
            <div>Site Web : {val.website }</div>
            <br></br>
            </div>
            </div>
            
         )
        })} 
        </div>
        </div>
    </>
    )
}

export default Profil