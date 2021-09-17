import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'
import Axios from 'axios';
import avatar from '../../img/R.png'
import image_post from '../../img/GameDevCafe.jpg'
import ReadMore from '../../components/ReadMore';
import Comment from '../../components/Comment';


function Home() {

    const [uploads, setUploads] = useState ([])

    useEffect(()=>{
        if(!localStorage.getItem("payload")) {
            localStorage.setItem("payload", false);
        }
    }, [])

    useEffect(() =>{
        Axios.get("http://localhost:8000/upload").then ((response) =>{
            setUploads(response.data);
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
                                    <div className="postName">{val.author}</div>
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
            <div className="flexCote rightBlock">
                block de droite
            </div>

        </div>
        

        </>
    )
}

export default Home