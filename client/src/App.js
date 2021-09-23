import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Create from './pages/create/Create';
import Profil from './pages/Profil/Profil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UpdateProfil from './pages/Profil/UpdateProfil';



function App() {
  return (
    <>
      
      <Router>
        <Route path="/" exact render ={ ()=> <Login/> } />
        <Route path="/home" exact render ={ ()=> <Home/> } />
        <Route path="/upload" exact render ={ ()=> <Create/> } />
        <Route path="/user" exact render ={ ()=> <Profil/> } />
        <Route path="/register" exact render ={ ()=> <Register/> } />
        <Route path="/update" exact render ={ ()=> <UpdateProfil/> } />
        
      </Router>

    </>
  );
}

export default App;