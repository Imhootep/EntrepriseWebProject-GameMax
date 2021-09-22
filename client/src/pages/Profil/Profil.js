import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'
import './Profil.css'
import UserProfil from '../../components/UserProfil' //a enlever 

function Profil() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([]) //a enlever

    useEffect(() =>{
        Axios.get(`${process.env.REACT_APP_API_URL}/user`).then ((response) =>{
            setUsers(response.data);
            //console.log(response.data);
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
        <div className="profilsContainer">
        {users.map((val)=>{
                        
                    return(
                        <>
                            <div className={val.id == localStorage.userId ? "firstBlock" : "profilsBlock" }>
            
                                {val.id == localStorage.userId ?
                                
                                <div className="bigBlock">
                                    <h1>Bonjour {val.username}, voici vos infos</h1>
                                    <div>{val.username}</div>
                                    <div>{val.email }</div>
                                    <div>{val.phone }</div>
                                    <div>{val.street }</div>
                                    <div>{val.website }</div>
                                </div>
                                
                                : 

                                <div className="littleBlock">
                                    <div className="infosProfil">
                                        <div>{val.username}</div>
                                        <div>{val.email }</div>
                                        <div>{val.phone }</div>
                                        <div>{val.street }</div>
                                        <div><a href={"https://"+val.website}>{val.website}</a></div>
                                    </div>
                                    <div className="linksProfil">
                                        <div className="socialProfil">Face</div>
                                        <div className="socialProfil">Twitter</div>
                                        <div className="socialProfil">Twich</div>
                                    </div>
                                    
                                </div>

                                }
                        
                                
                            </div>
                         </>
         )
        })} 
        </div>
    </>
    )
}

export default Profil