import React, { useEffect, useState } from 'react'
import '../pages/Home/Home.css'
import comment from '../img/comment-icon2.png'
import avatar from '../img/avatar.png' //testing
import banner from '../img/banner.png' //testing

//function Post() {


    const Comment = () => {
        const [isCommentDisplayed, setIsCommentDisplayed] = useState(false);
        const handleClick = function (e){
            e.preventDefault()
            setIsCommentDisplayed(!isCommentDisplayed)
        }

    return <div>
                <div className="CommentUpSection">
                    <a className="CommentButton" onClick={handleClick}> {isCommentDisplayed ? "cacher" : "12 commentaires"} </a>
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

    /*
    function Comment(){
        const [isCommentDisplayed, setIsCommentDisplayed] = useState(false);
        const handleClick = function (e){
            e.preventDefault()
            setIsCommentDisplayed(!isCommentDisplayed)
        }
    }
    */
    

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="readmoreBlock">
            {isReadMore ? text.slice(0, 800) : text}
            <span onClick={toggleReadMore} className="ReadMore">
              {isReadMore ? "...lire plus" : "réduire..."}
            </span>
          </p>
        );
      };


      const Post = () => {
        return (
            <div className="PostCOntainer">   
            <div className="PostBlock">
                <div className="PostAvatar">
                    <img src={avatar} alt="avatar"/>
                    <div className="AvatarName">Guillaume</div>
                    <ul className="MoreInfos">
                        <li>Posté le:</li>
                        <li>10/09/2021</li>
                    </ul>
                </div>
                <div className="PostContent">
                    <img src={banner} className="banner" alt="banner"/>
                    <div className="PostInfos">
                        <div className="PostTitle">Le lorem ipsum</div>
                        <div className="PostDate">22/09/2021</div>
                    </div>
                    <ReadMore>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                    </ReadMore>
                    <Comment />
                    
                </div>
            </div>
        </div>
        );
      };

{/*
    return (
        <div className="PostCOntainer">   
            <div className="PostBlock">
                <div className="PostAvatar">
                    <img src={avatar} alt="avatar"/>
                    <div className="AvatarName">Guillaume</div>
                    <ul className="MoreInfos">
                        <li>Posté le:</li>
                        <li>10/09/2021</li>
                    </ul>
                </div>
                <div className="PostContent">
                    <img src={banner} className="banner" alt="banner"/>
                    <div className="PostInfos">
                        <div className="PostTitle">Le lorem ipsum</div>
                        <div className="PostDate">22/09/2021</div>
                    </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                </div>
            </div>
        </div>
    )*/}
//}


export default Post
