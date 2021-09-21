import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'
import "./Profil.css"

function Profil() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])

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
    

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
       
            
            console.log(user.id)
            for(let i in response.data){
                //console.log(response.data[i]);
                console.log(response.data[i].username);
                if(response.data[i].id === localStorage.userId){
                    setUser(response.data)
                    console.log(Object.value(response.data[i].username));
                }
            }
        
                })

    }, []);



    return (
    <>
        <Navbar/>
        <div>

            <div>
            {user.map((val)=>{
                    return(
                        <div>
            <h5> profil d'utilisateur </h5>
            <div>{val.username }</div>
            <div>{val.email }</div>
            <div>{val.phone }</div>
            <div>{val.street }</div>
            <div>{val.website }</div>
                        </div>
            
                    )
                    })}

            <hr/>
            </div>
            
        {users.map((val)=>{
                    return(
          <div>
              
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
    </>
    )
}

export default Profil