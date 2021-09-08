import React, {useState} from 'react'


function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"",email:"", password:"" });

    const submitHandler =e=>{
        e.preventDefault();

        Login(details);
        
    }

    return (
      <form className="login" onSubmit={submitHandler}>
          {(error !== "") ? (<div className="error">{error}</div>) :"" }
         <div className="form-group">
            <input autoFocus placeholder="Email" type="email" name="email" id="email" onChange={e=>setDetails({...details, email:e.target.value})} value={details.email} />
        </div> 
        <div className="form-group">
            <input placeholder="Password" type="password" name="password" id="password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password} />
        </div> 
        <button className="button" type="submit">LOGIN</button>
      </form>
    )
}

export default LoginForm
