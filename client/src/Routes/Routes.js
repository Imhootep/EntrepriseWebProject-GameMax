import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Event from '../Pages/Events';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Profil from '../Pages/Profil';


const Routes = () => {
    return (
        <div>
            <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/event" exact component={Event} />
                
                <Redirect to="/" />
            </Switch>
        </Router>
        </div>
    );
};

export default Routes;