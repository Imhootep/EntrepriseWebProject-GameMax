import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar'


function Home() {

    useEffect(()=>{
        if(!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
        }
    }, [])

    return (
        <>
        <Navbar/>
        <div>
            Home
        </div>

        </>
    )
}

export default Home
