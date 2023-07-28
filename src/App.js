import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { AuthContextProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute'

function App() {
 
  return (
    <div className="App">
        <AuthContextProvider>

        <ShopContextProvider>

          <Router>
       
            <Navbar />
           

            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/shop" element={<PrivateRoute><Shop/></PrivateRoute>} />
               <Route path='/register'element={<Register/>}/> 
              <Route path="/cart" element={<Cart />} />
            </Routes>
           
          </Router>
        </ShopContextProvider>
        </AuthContextProvider>

    </div>
  );
}

export default App;
