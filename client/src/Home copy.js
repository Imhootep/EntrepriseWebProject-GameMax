import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import userContext from '../userContext';


const Home = () => {
    const { user } = useContext(userContext)

   
 
    return (
        <div className="homePage">
            <div>
                <div>
                    <Navbar/>
                </div>
                <h2>Welcome, <span>{user.name}</span> </h2>
                <a href="/">Logout</a>
            </div>
            <div>
                <a href="https://discord.gg/pFujACSxAg"> Lien Discord </a>
            </div>
        </div>
        
    );
};

export default Home;