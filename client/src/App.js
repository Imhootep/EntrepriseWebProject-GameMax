import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Profil from './pages/Profil/Profil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



function App() {
  return (
    <>
      
      <Router>
        <Route path="/" exact render ={ ()=> <Login/> } />
        <Route path="/home" exact render ={ ()=> <Home/> } />
        <Route path="/upload" exact render ={ ()=> <Create/> } />
        <Route path="/profil" exact render ={ ()=> <Profil/> } />
        <Route path="/register" exact render ={ ()=> <Register/> } />
        
      </Router>

    </>
  );
}

export default App;
