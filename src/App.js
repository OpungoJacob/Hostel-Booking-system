import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App(){
    return(
      <BrowserRouter>
           <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/pages/Signup' element={<Signup />}></Route>
                <Route path='/pages/Home' element={<Home />}></Route>
            </Routes> 
      </BrowserRouter>  
    )
}
