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
/*
            if(response.data.id === users.userId){
                console.log("reussi")
                console.log("wtf:"+response.data.id)
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
              
            <div>{val.username }</div>
            <div>{val.email }</div>
            <div>{val.phone }</div>
            <div>{val.street }</div>
            <div>{val.website }</div>
            <br></br>
            <button>voir profil</button>
            <button>favoris</button>
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