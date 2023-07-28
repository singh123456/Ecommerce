import React, { useState } from "react";
import { UserAuth } from '../../context/AuthContext';

import './Register.css';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');

    try {
      await createUser( email, password); 
      navigate('/shop');
    } catch (err) {
      setErr(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Shopping Zone</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Name..." onChange={(e) => (e.target.value)} />
          <input required type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
          <input required type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />

          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

