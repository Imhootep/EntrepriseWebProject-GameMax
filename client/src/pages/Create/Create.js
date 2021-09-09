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
                    <h3>New Event</h3>
                </button> 
            </div>
            <div className="createDoc">
                <button className="post">
                    <h3>New Doc  </h3>
                </button>
            </div>
            <div className="createDoc">
                <button className="post">
                    <h3>Profil  </h3>
                </button>
            </div>
            {/* <div className="createDoc">
                <button className="post">
                    <h3>Modifier Post  </h3>
                </button>
            </div> */}
            
        </div>

        <div>
            <div>
                <input className="searchEvent" type="text" placeholder="recherche d'Event ..." /> 
                <input className="searchDoc" type="text" placeholder="recherche de Document ..." /> 
            </div>

        </div>
        
        

        </>
    )
}

export default Create
