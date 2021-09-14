import React, {useState} from "react";
import comment from '../img/comment-icon2.png'
import avatar from '../img/R.png' //testing

      //  PARTIE COMMENTAIRES 
      const Comment = () => {
        const [isCommentDisplayed, setIsCommentDisplayed] = useState(false);
        const handleClick = function (e){
            e.preventDefault()
            setIsCommentDisplayed(!isCommentDisplayed)
        }

    return <div>
                <div className="CommentUpSection">
                    <button className="CommentButton" onClick={handleClick}> {isCommentDisplayed ? "cacher" : "12 commentaires"} </button>
                    <img src={comment} className="comment" alt="comment"/>

                        {isCommentDisplayed ? 
                        <div className="CommentDownSection"> {/*ici faire boucle pour afficher les blocs*/}
                        <div className="CommentBlock">
                            <img src={avatar} alt="avatar" className="CommentSectionAvatar"/>
                            <p className="CommentSectionText">
                                Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! Trop cool cet évent je veux y participer !!! 
                            </p>
                        </div>
                    </div>
                        : ""}

                </div>
                
            </div>  

    }



  export default Comment