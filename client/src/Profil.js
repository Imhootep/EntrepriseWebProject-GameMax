import React from 'react';
import SignUpForm from './SignUpForm';
import Navbar from './Navbar';

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