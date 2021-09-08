import React, { useState } from "react";
import Routes from "./Routes/Routes";
import userContext from "./userContext";


// import Login from "./Pages/Login";


const App=() => {

  const [user, setUser] = useState ({name:"", email:""});
  const contextValue ={
    user,
    updateUser:setUser,
  }


  return (
    <userContext.Provider value={contextValue}>
      <div className="App">
        
        <Routes/>
      </div>
     </userContext.Provider> 
  );
}

export default App;
