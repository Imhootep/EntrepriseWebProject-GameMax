import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'
import Axios from 'axios';
import avatar from '../../img/R.png'
import image_post from '../../img/GameDevCafe.jpg'
import ReadMore from '../../components/ReadMore';
import Comment from '../../components/Comment';
import star from '../../img/star_yellow.png';
import cross from '../../img/cross.png';


function Home() {

    const [uploads, setUploads] = useState ([])

    useEffect(()=>{
        if(!localStorage.getItem("JWT")) {
            localStorage.setItem("JWT", false);
        }
    }, [])

    useEffect(() =>{
        Axios.get("http://localhost:8000/upload").then ((response) =>{
            setUploads(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <>
        <Navbar/>
        <div className="containerHome">
            {/* <div className="flexCote">
                Block de gauche
            </div> */}

{/* -------------------------BLOC DES POSTS---------------------- */}
            <div className="flexMiddle">
                {uploads.map((val)=>{
                    return(

                      <div className="postHome" key={val.id}> 
                         <div className="postImage">
                             <div className="postUser">
                                 <div className="postAvatar">
                                     <img className="userAvatar" src={avatar} alt="avatar"/>
                                 </div>
                                 <div className="postInfos">
                                    <div className="postName"> posté par {val.id_user}</div>
                                    <div className="postDate">
                                        <ul className="MoreInfos">
                                            <li>Posté le:</li>
                                            <li>{val.createdAt}</li>
                                        </ul>
                                    </div>
                                </div>
                             </div>
                             <div className="postImageblock">
                                 <img className="postBanner" src={image_post} alt="postBanner" />
                             </div>
                         </div>
                         <div className="postContent">
                            <div className="postTitle"> {val.title} </div>
                                <div className="description">
                                    <div >
                                    <ReadMore>
                                        {val.description}
                                    </ReadMore>
                                    <Comment />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })} 
                {/* <Post/> */}

            
            </div>
            {/* ------------------------------------------------------------ */}
            <div className="flexCote">
                <div className="rightBlock">
                    <div className="rightTitle">
                        Prochain évènement
                    </div>
                    <div>
                        <div className="nextEvent">
                            <div className="nextEventTitle">
                                La boum chez francois
                            </div>
                            <div>
                                04/10/2021
                            </div>
                        </div>
                        <img src={image_post} className="favoriteEvent" alt="favorite Event" />
                    </div>
                    <div className="rightTitle">
                        Favoris
                    </div>
                    <div className="rightContent">
                        <div className="favoriteBlock">
                            <div className="favoriteGrow">
                                <img src={star} className="starYellow" alt="favoris"/>
                                <div className="favoriteText">mons game dev cafe </div>
                            </div>
                            <div>
                                <img src={cross} className="cross" alt="cross"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        

        </>
    )
}

export default Home