import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'
import './Profil.css'
import UserProfil from '../../components/UserProfil' //a enlever 
import arrowup from '../../img/arrowup.png';
import home2 from '../../img/home2.svg';
import mail from '../../img/mail.svg';
import phone from '../../img/phone.svg';
import user2 from '../../img/user2.svg';
import description from '../../img/description.svg';

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
                                            <b>{val.username}</b>
                                        </div>
                                        <div>
                                            <img src={user2} alt="utilisateur" className="profilIcon"/>
                                            créé le {val.createdAt}
                                        </div>
                                        <div>
                                            <img src={mail} alt="mail" className="profilIcon"/>
                                            {val.email }
                                        </div>
                                        <div>
                                            <img src={phone} alt="téléphone" className="profilIcon"/>
                                            {val.phone }</div>
                                        <div>
                                            <img src={home2} alt="home2" className="profilIcon"/>
                                            {val.street+", "+val.number+" "+val.box}
                                            {val.cp+" "+val.city}
                                            
                                        </div>
                                        <div>
                                            <img src={description} alt="description" className="profilIcon"/>
                                            {val.comment}
                                        </div>
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
                                            <b>{val.username}</b>
                                        </div>
                                        <div>
                                            <img src={user2} alt="utilisateur" className="profilIcon"/>
                                            créé le {val.createdAt}
                                        </div>
                                        <div>
                                            <img src={mail} alt="mail" className="profilIcon"/>
                                            {val.email }
                                        </div>
                                        <div>
                                            <img src={phone} alt="téléphone" className="profilIcon"/>
                                            {val.phone }</div>
                                        <div>
                                            <img src={home2} alt="home2" className="profilIcon"/>
                                            {val.street+", "+val.number+" "+val.box}
                                            {val.cp+" "+val.city}
                                            
                                        </div>
                                        <div>
                                            <img src={description} alt="description" className="profilIcon"/>
                                            {val.comment}
                                        </div>
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
                                        <div className="goProfil"  title="afficher le profil en grand"  onClick={() => newProfilActif(val.id)}>
                                            <div> {val.username}</div>
                                            <div>VOIR<img className="arrowup" src={arrowup} alt="arrow up"/></div>
                                        </div>
                                        <div>{val.email }</div>
                                        <div>{val.phone }</div>
                                        <div>{val.street }</div>
                                        <div><a href={"https://"+val.website}>{val.website}</a></div>
                                    </div>
                                    <div className="linksProfil">
                                        <div className="socialProfil">
                                            <svg><path d="M13.5 5.313q-1.125 0-1.781.375t-.844.938-.188 1.438v3.938H16l-.75 5.688h-4.563v14.313H4.812V17.69H-.001v-5.688h4.813v-4.5q0-3.563 2-5.531T12.125.002q2.688 0 4.375.25v5.063h-3z"></path></svg>
                                        </div>
                                        <div className="socialProfil">
                                            <svg><path d="M28.688 9.5q.063.25.063.813 0 3.313-1.25 6.594t-3.531 6-5.906 4.406-8 1.688q-5.5 0-10.063-2.938.688.063 1.563.063 4.563 0 8.188-2.813-2.188 0-3.844-1.281t-2.281-3.219q.625.063 1.188.063.875 0 1.75-.188-1.5-.313-2.688-1.25t-1.875-2.281-.688-2.906v-.125q1.375.813 2.938.875-2.938-2-2.938-5.5 0-1.75.938-3.313Q4.69 7.251 8.221 9.063t7.531 2q-.125-.75-.125-1.5 0-2.688 1.906-4.625T22.127 3q2.875 0 4.813 2.063 2.25-.438 4.188-1.563-.75 2.313-2.875 3.625 1.875-.25 3.75-1.063-1.375 2-3.313 3.438z"></path></svg>
                                        </div>
                                        <div className="socialProfil">
                                            <svg><path d="M34.375 7.75q.188.75.344 1.875t.219 2.219.094 2.031.031 1.563v.563q0 5.625-.688 8.313-.313 1.063-1.125 1.875t-1.938 1.125q-1.188.313-4.5.469t-6.063.219h-2.75q-10.688 0-13.313-.688-2.438-.688-3.063-3-.313-1.188-.469-3.281t-.219-3.531v-1.5q0-5.563.688-8.25.313-1.125 1.125-1.938t1.938-1.125q1.188-.313 4.5-.469t6.063-.219h2.75q10.688 0 13.313.688 1.125.313 1.938 1.125t1.125 1.938zM14.5 21.125L23.438 16 14.5 10.937v10.188z"></path></svg>
                                        </div>
                                        <div className="socialProfil">
                                            <svg><path d="M2.5 2h24.875v17.125l-7.313 7.313h-5.438l-3.563 3.563h-3.75v-3.563H.623V6.813zm22.375 15.875V4.5H4.812v17.563h5.625v3.563L14 22.063h6.688zm-4.187-8.562v7.313h-2.5V9.313h2.5zm-6.688 0v7.313h-2.5V9.313H14z"></path></svg>
                                        </div>
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