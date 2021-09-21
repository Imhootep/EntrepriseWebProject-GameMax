import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import './Create.css'
import Axios from 'axios'
import {useHistory} from 'react-router-dom';
// import UploadDoc from '../../components/UploadDoc'


function Create ()  {

    const [title, setTitle] = useState ("")
    const [description, setDescription] = useState ("")
    
    // const [image, setImage] = useState ([])

    const [type, setType] = useState('post');
    const handleChange = function (e){
        e.preventDefault() /* ??? */
        setType(e.target.value)
    }

    let history = useHistory()

    const upload =() =>{

        // const formData = new FormData()
        
        // formData.append("file", image[0])
        // formData.append("upload_preset", "ml_default" )
        
        // Axios.post('https://api.cloudinary.com/v1_1/ewp-team/image/upload', formData).then((response) =>{
        //     const fileName = response.data.public_id

            // Axios.post("http://localhost:8000/upload", {title:title, description:description, image:fileName})
        // })
        Axios.post("http://localhost:8000/upload", {
            title:title, 
            description:description,
            id_user: localStorage.getItem("userId"),
            username: localStorage.getItem("username"),
            type: type         
        }).then (() =>{
        //history.push('/home')
        setInterval(function(){ history.push('/home') }, 500);
        })
        
    }


    return (
        <>
        <Navbar/>
        <div className="creationPost">
            <h3>Crée un Post</h3>
                <div className="postForm">
                    <select className="type" name="type" id="type" value={type} onChange={handleChange}>
                        <option value="event">Event</option>
                        <option value="doc">Doc</option>
                        <option value="post">Post</option>
                    </select>
                    <input 
                        className="inputPost"
                        type="text"
                        placeholder="Titre..."
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />

                    <textarea 
                        className="inputPost"
                        type="text"
                        placeholder="Description..."
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />

                    {/* <input type="file" onChange={(e)=>setImage(e.target.value)} /> */}
                    
                    <button className="createPost" onClick={upload}>Post</button>

                </div>
        </div>

        {/* <div>
            <div>
                <input className="searchEvent" type="text" placeholder="recherche d'Event ..." /> 
                <input className="searchDoc" type="text" placeholder="recherche de Document ..." /> 
            </div>
        </div> */}
        
        

        </>
    )
}


export default Create