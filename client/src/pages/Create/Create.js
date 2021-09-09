import React from 'react'
import Navbar from '../../components/Navbar'
<<<<<<< HEAD
=======
import './Create.css'
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9

function Create() {
    return (
        <>
        <Navbar/>
<<<<<<< HEAD
        <div>
            Create post, event or new profil
        </div>
=======
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
        
        

>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
        </>
    )
}

export default Create
