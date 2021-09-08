import React from 'react';
import SignUpForm from '../Components/SignUpForm';
import Navbar from '../Components/Navbar';

const Profil = () => {

    // const [signUp, setSignUp] = useState();


    

    return (
        <div className="signUp">
            <div>
                <Navbar/>
            </div>
           <div>
            <SignUpForm />
            </div>
        </div>
    );
};

export default Profil;