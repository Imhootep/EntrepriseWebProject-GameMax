import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Axios from 'axios'
<<<<<<< HEAD
import "./Profil.css"
import UserProfil from '../../components/UserProfil'
=======
>>>>>>> 1508975d07d86f63a730400d598e035c7af3e109

function Profil() {

    const [users, setUsers] = useState([])
    

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
            setUsers(response.data);
            console.log(response.data);
/* --- pas au bon endroit
            for(let i in response.data){
                //console.log(response.data[i]);
                console.log(response.data[i].username);
                if(response.data[i].id == localStorage.userId){
                    console.log("le bon "+response.data[i].username);
                }
             }*/

        })
    }, []);
    

    useEffect(() =>{
        Axios.get("http://localhost:8000/user").then ((response) =>{
       
            for(let i in response.data){
                //console.log(response.data[i]);
                console.log(response.data[i].username);
                if(response.data[i].id == localStorage.userId){

                    //console.log("le bon "+response.data[i].username);
                    //console.log(response.data[i]);

                    console.log(Object.values(response.data[i]));
                    setUser(Object.values(response.data[i])) // il me manque les clés du tableau
                   // console.log(user)
                }
             }
    })
        
    }, []);



    return (
    <>
        <Navbar/>
        <div>
<<<<<<< HEAD
            <UserProfil/>
            <hr/>
            <h5> profil des autres utilisateurs </h5>
            <div className="ensProfil">
            
        {users.map((val)=>{
                    return(
                        
          <div className="showProfil">
              
              <div className="postProfil" key={val.id}>
              
=======

            <div>
            {user.map((val)=>{

               // console.log(val)
                    return(
                        <div>
                        {/* <div>c'est toi:{val.username }</div>
                        <div>{val.email }</div>
                        <div>{val.phone }</div>
                        <div>{val.street }</div>
                        <div>{val.website }</div> */}
                        </div>
            
                    )
                    })}
            </div>
            
        {users.map((val)=>{
                    return(
          <div>
              <div className="postProfil" key={val.id}>
>>>>>>> 1508975d07d86f63a730400d598e035c7af3e109
            <div>{val.username }</div>
            <div>{val.email }</div>
            <div>{val.phone }</div>
            <div>{val.street }</div>
            <div>{val.website }</div>
            <br></br>
            </div>
            </div>
            
         )
        })} 
        </div>
        </div>
    </>
    )
}

export default Profil