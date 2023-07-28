import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('');
  const[err,setErr]=useState('');
  const navigate=useNavigate();
  const{signIn}=UserAuth();
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
 
    try{
       await signIn(email,password);
       navigate('/shop')
    }catch(e){
      setErr(e.message)
    }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Shopping Zone</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;