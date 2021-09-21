import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'

function Profil() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
            setUsers(response.data);
            console.log(response.data);
        })
    }, []);
    

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
       
        if (response.data.username === localStorage.username){
            setUser(response.data)
            console.log(user.username)
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
                        <div>{val.username }</div>
            <div>{val.email }</div>
            <div>{val.phone }</div>
            <div>{val.street }</div>
            <div>{val.website }</div>
                        </div>
            
                    )
                    })}
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
            </div>
            </div>
          
         )
        })} 
        </div>
    </>
    )
}

export default Profil