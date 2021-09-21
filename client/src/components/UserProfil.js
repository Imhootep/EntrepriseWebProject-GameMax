import React, { useState, useEffect} from 'react'
import Axios from 'axios';

function UserProfil() {

    const [user, setUser] = useState([])

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
        <div>
            <div className="ensProfil">
            <h5> votre profil </h5>
            {user.map((val)=>{
                    return(
                        <div className="postProfil" key={val.id}>
                        
            
            <div>{val.username }</div>
            <div>{val.email }</div>
            <div>{val.phone }</div>
            <div>{val.street }</div>
            <div>{val.website }</div>
                        </div>
            
                    )
                    })}

            <button>modifier profil</button>
            </div>
        </div>
    )
}

export default UserProfil
