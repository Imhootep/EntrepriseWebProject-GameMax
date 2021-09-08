import React from 'react'
import Navbar from '../../components/Navbar'

function Create() {
    return (
        <>
        <Navbar/>
        <div>
            <div className="create">
               Poster un nouvel Event  
            </div>
            <div className="create">
                Poster un nouveau Document
            </div>
            <div className="create">
                modifier Profil
            </div>
            <div className="create">
                modifier Post
            </div>
            <div></div>
        </div>
        </>
    )
}

export default Create
