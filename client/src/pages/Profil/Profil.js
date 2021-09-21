import React from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'

function Profil() {
    return (
        <>
        <Navbar/>
        <div>
           Profils:
            <div>avatar: </div>
            <div>nom: </div>
            <div>lien du site web: </div>
            <div>lien fb: </div>
            <div>email: </div>
            <div>premier membre: </div>
            <div>deuxieme membre: </div>
        </div>
        </>
    )
}

export default Profil