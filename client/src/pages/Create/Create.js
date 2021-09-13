import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import './Create.css'
import Axios from 'axios'
import UploadDoc from '../../components/UploadDoc'


function Create ()  {

    const [title, setTitle] = useState ("")
    const [description, setDescription] = useState ("")
    const [image, setImage] = useState ([])

    const upload =() =>{

        const FormData = new FormData()
        
        FormData.append("file", image[0])
        FormData.append("upload_preset", "soxfojqu" )
        
        Axios.post('https://api.cloudinary.com/v1_1/ewp-gamemax/image/upload', FormData).then((response) =>{
            const fileName = response.data.public_id

            Axios.post("http://localhost:3001/upload", {title:title, description:description, image:fileName})
        })
        
    }


    return (
        <>
        <Navbar/>
        <div className="creationPost">
            <h3>Crée un Post!</h3>
                <div className="postForm">
                    <input 
                        className="inputPost"
                        type="text"
                        placeholder="Titre..."
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />

                    <input 
                        className="inputPost"
                        type="text"
                        placeholder="Description..."
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />

                    <UploadDoc onChange={(e)=>setImage(e.target.value)} />
                    
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
