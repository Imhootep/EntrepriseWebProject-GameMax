import React, {useState} from "react";
import comment from '../img/comment-icon2.png'
import avatar from '../img/R.png' //testing

      //  PARTIE COMMENTAIRES 
      const Comment = () => {
        const [isCommentDisplayed, setIsCommentDisplayed] = useState(true); //passé en true pour afficher de base les coms
        const handleClick = function (e){
            e.preventDefault()
            setIsCommentDisplayed(!isCommentDisplayed)
        }

    return <div className="CommentContainer">
                <div className="CommentUpSection">
                    <div className="SocialInteraction">
                        JAIME
                    </div>
                    <div className="SocialInteraction">
                        <p className="CommentButton" onClick={handleClick}>COMMENTAIRES (12)</p>
                        {/*<p className="CommentButton" onClick={handleClick}> {isCommentDisplayed ? "cacher" : "12 commentaires"} </p>
                        <img src={comment} className="comment" alt="comment"/>*/}
                    </div>
                    <div className="SocialInteraction">
                        PARTAGE
                    </div>
                 </div>
                        {isCommentDisplayed ? 
                <div className="CommentDownSection"> {/*ici faire boucle pour afficher les blocs*/}
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
                                10h05
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
                                16/09/21
                            </div>
                            <div className="CommentDateBottom">
                                11h05
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
                                17/09/21
                            </div>
                            <div className="CommentDateBottom">
                                23h58
                            </div>
                        </div>
                        
                        <p className="CommentSectionText">
                            Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! 
                        </p>
                    </div>
                    
                </div>
                        : ""}
                <div>
                    <input type="text" placeholder="Nouveau commentaire" className="addComment"></input><button>Ajouter</button>
                </div>
            </div>  

    }



  export default Comment