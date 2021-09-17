import React, { useState } from 'react'
import '../pages/Home/Home.css'

// import avatar from '../img/R.png' //testing
// import banner from '../img/banner.png' //testing
// import Axios from 'axios';



//  partie commentaire 

//       const Post = () => {

       
//             return(
//             <div className="PostContainer">  
//                <div className="PostBlock2">
//                    <div className="BannerBlock">                   
//                         <div className="PostAvatar">
//                             <img src={avatar} alt="avatar"/>
//                             <div className="AvatarName2">@ {val.author}</div>
//                             <ul className="MoreInfos">
//                                 <li>Posté le:</li>
//                                 <li>{val.createdAt}</li>
//                             </ul>
//                         </div>
//                         <img src={banner} className="banner2" alt="banner"/>
//                     </div>
//                     <div className="TitleBlock">
//                         <div className="PostTitle2">{val.title}</div>
//                         <div className="PostInfos">
//                             <div className="PostDate">22/09/2021</div>
//                         </div>
//                         </div>
//                         <div className="PostContent2">
//                             <ReadMore>
//                             {val.description}
                            
//                             </ReadMore>
//                             <Comment />
//                         </div>
//                 </div>
//             </div>

//         );
//     })
//         )
// };
    


      
// PARTIE READ MORE

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (<>
                  <p className="readmoreBlock">
                    {isReadMore ? text.slice(0, 400) : text}
                  </p>
                  {text.length <= 400 ? "" : 
                  <div onClick={toggleReadMore} className="ReadMore">
                    {isReadMore ? "...lire plus" : "réduire..."}
                  </div>
                }
                  
                </>
        );
      };

      export default ReadMore
