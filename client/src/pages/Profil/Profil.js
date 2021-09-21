import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'

function Profil() {

    const [users, setUsers] = useState([])

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
            setUsers(response.data);
            console.log(response.data);
        })
    }, []);

    

    return (
    <>
        <Navbar/>
        <div>
            Hello
            
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