import React from 'react'
import Navbar from '../../components/Navbar'
import './Create.css'

function Create() {
    return (
        <>
        <Navbar/>
        <div className="createModif">
            <div className="createDoc">
                <button className="post">
                    <h3>Poster un nouvel Evènement</h3>
                </button> 
            </div>
            <div className="createDoc">
                <button className="post">
                    <h3>Poster un nouveau Document  </h3>
                </button>
            </div>
            <div className="createDoc">
                <button className="post">
                    <h3>Modifier Profil  </h3>
                </button>
            </div>
            <div className="createDoc">
                <button className="post">
                    <h3>Modifier Post  </h3>
                </button>
            </div>
            
        </div>

        <div>
            <div>
                <input type="text" placeholder="recherche d'Event" /> 
                
            </div>
        </div>

        </>
    )
}

export default Create
