import React, {useState} from "react";
import comment from '../img/comment-icon2.png'
import avatar from '../img/R.png' //testing
import like from '../img/like.png' //testing
import share from '../img/share.png' //testing
import comment2 from '../img/comment.png' //testing

      //  PARTIE COMMENTAIRES 
      const Comment = () => {
        const [isCommentDisplayed, setIsCommentDisplayed] = useState(false); //passé en true pour afficher de base les coms
        const handleClick = function (e){
            e.preventDefault()
            setIsCommentDisplayed(!isCommentDisplayed)
        }

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
                    <div className="SocialInteraction">
                        <img src={share}  alt="partage" className="SocialInteractionImg"/>
                    </div>
                 </div>
                        {isCommentDisplayed ? 
                <div className="CommentDownSection"> {/*ici faire boucle pour afficher les blocs*/}
                    <div className="addCommentBlock">
                        <input type="text" placeholder="Commentaire" className="addComment"></input>
                        <div className="addCommentButton"><span>Ajouter</span></div>
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