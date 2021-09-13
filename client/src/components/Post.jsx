import React, { useEffect, useState } from 'react'
import '../pages/Home/Home.css'
import comment from '../img/comment-icon2.png'
import avatar from '../img/avatar.png' //testing
import banner from '../img/banner.png' //testing

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
            <div className="PostContainer">  
               <div className="PostBlock2">
                   <div className="BannerBlock">                   
                        <div className="PostAvatar">
                            <img src={avatar} alt="avatar"/>
                            <div className="AvatarName2">Guillaume</div>
                            <ul className="MoreInfos">
                                <li>Posté le:</li>
                                <li>10/09/2021</li>
                            </ul>
                        </div>
                        <img src={banner} className="banner2" alt="banner"/>
                    </div>
                    <div className="TitleBlock">
                        <div className="PostTitle2">Le lorem ipsum</div>
                        {/*<div className="PostInfos">
                            <div className="PostDate">22/09/2021</div>
                        </div>*/}
                        </div>
                        <div className="PostContent2">
                            <ReadMore>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                            Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

                            Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. 
                            </ReadMore>
                            <Comment />
                        </div>
                </div>
            </div>

        );
      };


export default Post
