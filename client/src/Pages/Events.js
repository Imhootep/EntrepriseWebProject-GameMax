import React from 'react';
import Navbar from '../Components/Navbar';

const Event = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="event">
            Events
            </div>
            <div className="doc">
            Documents
            </div>
        </div>
    );
};

export default Event;