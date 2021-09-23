import React, {useState} from "react";
import avatar from '../img/R.png' //testing
import like from '../img/star.png' //testing
import comment2 from '../img/comment-icon2.png' //testing
import Axios from 'axios'
import {useHistory} from 'react-router-dom';

      //  PARTIE COMMENTAIRES
        // const [id, setId] = useState ("") //guitest
        // const [content, setContent] = useState ("") //guitest

      //afficher les commentaires qui sont caché de base
      const Comment = () => { //guitest: changer comment en fonction pour y insérer le usestate
        const [isCommentDisplayed, setIsCommentDisplayed] = useState(false); //passé en true pour afficher de base les coms
        const handleClick = function (e){
            e.preventDefault()
            setIsCommentDisplayed(!isCommentDisplayed)
        }

        //ajouter un commentaire (test gui)
        // const upload =() =>{
            

        //     Axios.post(`${process.env.REACT_APP_API_URL}/comment`, {
        //         //id_upload: wherethefuckisthis,
        //         id_user: localStorage.getItem("userId"),
        //         content:content
        //     }).then (() =>{
        //     //history.push('/home')
        //     setInterval(function(){ history.push('/home') }, 500);
        //     })
            
        // }



    return <div className="CommentContainer">
                <div className="CommentUpSection">
                    <div className="SocialInteraction">
                        <img src={like}  alt="like" className="SocialInteractionImg"/>
                    </div>
                    <div className="SocialInteraction">
                        
                        <p className="CommentButton" onClick={handleClick}><img src={comment2}  alt="commente" className="SocialInteractionImg"/></p>
                        {/*<p className="CommentButton" onClick={handleClick}> {isCommentDisplayed ? "cacher" : "12 commentaires"} </p>
                        <img src={comment} className="comment" alt="comment"/>*/}
                    </div>
                    
                 </div>
                        {isCommentDisplayed ? 
                <div className="CommentDownSection"> {/*ici faire boucle pour afficher les blocs*/}
                    <div className="addCommentBlock">
                        {/* <input type="text" placeholder="Commentaire" className="addComment" onChange={(e)=>{setContent(e.target.value)}}></input>
                        <div className="addCommentButton" onClick={upload}><span>Ajouter</span></div> */}
                    </div>
                    <div className="CommentDisplay">
                        <div className="CommentBlock">
                            <div>
                                <img src={avatar} alt="avatar" className="CommentSectionAvatar"/>
                                <div className="CommentDateTop">
                                    15/09/21
                                </div>
                                <div className="CommentDateBottom">
                                    09h27
                                </div>
                            </div>
                            
                            <p className="CommentSectionText">
                                Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! 
                            </p>
                        </div>
                        <div className="CommentBlock">
                            <div>
                                <img src={avatar} alt="avatar" className="CommentSectionAvatar"/>
                                <div className="CommentDateTop">
                                    15/09/21
                                </div>
                                <div className="CommentDateBottom">
                                    09h27
                                </div>
                            </div>
                            
                            <p className="CommentSectionText">
                                Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! 
                            </p>
                        </div>
                        <div className="CommentBlock">
                            <div>
                                <img src={avatar} alt="avatar" className="CommentSectionAvatar"/>
                                <div className="CommentDateTop">
                                    15/09/21
                                </div>
                                <div className="CommentDateBottom">
                                    09h27
                                </div>
                            </div>
                            
                            <p className="CommentSectionText">
                                Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! 
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                        : ""}
            </div>  

    }



  export default Comment