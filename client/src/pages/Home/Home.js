import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Post from '../../components/Post'


function Home() {

    useEffect(()=>{
        if(!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
        }
    }, [])

    return (
        <>
        <Navbar/>
        <div className="containerHome">
            <div className="flexCote">
                Block de gauche
            </div>
            <div className="flexMiddle">
                <Post/>
            </div>
            <div className="flexCote">
                block de droite
            </div>

        </div>
        

        </>
    )
}

export default Home
