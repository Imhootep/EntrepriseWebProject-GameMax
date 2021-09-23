import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'
import './Profil.css'
import UserProfil from '../../components/UserProfil' //a enlever 
import arrowup from '../../img/arrowup.png';

function Profil() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([]) //a enlever
    const [profilActif, setProfilActif] = useState(); // pour afficher la page du profil actuel

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

    // useEffect((data) =>{
    //     console.log(data)
    //     setProfilActif(data);
    // }, []);

    const newProfilActif =(data) => {
        console.log(data)
        setProfilActif(data)
    };
    
    return (
    <>
        <Navbar/>
        <div className="profilsContainer">
            <div className="searchBar">
                <input type="text" placeholder="Rechercher..."></input>
                <button><span>Rechercher</span></button>
            </div>
        {users.map((val)=>{
                        
                    return(
                        <>
                            <div className={((val.id == localStorage.userId && profilActif == undefined) || val.id == profilActif) ? "firstBlock" : "profilsBlock" }>

                                {(profilActif != undefined && val.id == profilActif) ? 
                                //premier resultat
                                <div className="bigBlock">
                                    <div className="sectionProfil">
                                        <div>
                                            {/* <img src="" /> avatar */}
                                            <b>{val.username}</b>
                                            <div>créé le {val.createdAt }</div>
                                        </div>
                                        
                                        {/* <div>{val.username}</div> */}
                                        <div>{val.email }</div>
                                        <div>{val.phone }</div>
                                        <div>{val.street+", "+val.number+" "+val.box}</div>
                                        <div>{val.cp+" "+val.city}</div>
                                        <div>{val.comment}</div>
                                    </div>
                                    <div className="sectionProfil">
                                        <b>Membres</b>
                                        <div>{val.member}</div>
                                    </div>
                                    <div className="sectionProfil">
                                        <b>Jeux</b>
                                        <div>{val.games}</div>
                                    </div>
                                    <div className="sectionProfil">
                                        <b>Réseaux</b>
                                        <div>{val.website}</div>
                                        <div>{val.social}</div>
                                    </div>
                                    {/* <div className="modifyProfil">
                                        Modifier
                                    </div> */}
                                </div> 
                                :
                                //deuxieme resultat 
                                (val.id == localStorage.userId && profilActif == undefined) ?
                                
                                <div className="bigBlock">
                                    <div className="sectionProfil">
                                        <div>
                                            {/* <img src="" /> avatar */}
                                            <b>{val.username}</b>
                                        </div>
                                        
                                        {/* <div>{val.username}</div> */}
                                        <div>créé le {val.createdAt}</div>
                                        <div>{val.email }</div>
                                        <div>{val.phone }</div>
                                        <div>{val.street+", "+val.number+" "+val.box}</div>
                                        <div>{val.cp+" "+val.city}</div>
                                        <div>{val.comment}</div>
                                    </div>
                                    <div className="sectionProfil">
                                        <b>Membres</b>
                                        <div>{val.member}</div>
                                    </div>
                                    <div className="sectionProfil">
                                        <b>Jeux</b>
                                        <div>{val.games}</div>
                                    </div>
                                    <div className="sectionProfil">
                                        <b>Réseaux</b>
                                        <div>{val.website}</div>
                                        <div>{val.social}</div>
                                    </div>
                                    {/* <div className="modifyProfil">
                                        Modifier
                                    </div> */}
                                </div>
                                
                                : 

                                <div className="littleBlock">
                                    <div className="infosProfil">
                                        {/* <div onClick={setProfilActif(val.id)}>ALLER</div> */}
                                        <div className="goProfil"  title="afficher le profil en grand">
                                            <div> {val.username}</div>
                                            <div onClick={() => newProfilActif(val.id)}>VOIR<img className="arrowup" src={arrowup} alt="arrow up"/></div>
                                        </div>
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