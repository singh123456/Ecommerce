import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import{UserAuth} from '../context/AuthContext'
export const Navbar = () => {
  const{user,logout}=UserAuth();
  const navigate=useNavigate();
  const handleLogout= async()=>{
       try{
        await logout()
        navigate('/')
        console.log('You are logged out')
       }catch(e){
        console.log(e.message)
       }
  }
  return (
    <div className="navbar">
      <div className="links">
      <h3 style={{color:'white'}}>{user && user.email}</h3>
        <Link to="/shop"> Shop </Link>
        
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        {
         user && <Link onClick={(handleLogout)}>Logout</Link>
        }
        
      </div>
    </div>
  );
};