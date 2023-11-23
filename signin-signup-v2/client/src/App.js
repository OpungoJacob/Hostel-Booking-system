import React from 'react';
import {Navigate,Routes,Route} from 'react-router-dom';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Main from "./components/Main/index"

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
        {user &&<Route path='/' exact element={<Main />} />}
        <Route path='/Signup' exact element={<Signup />} />
        <Route path='/Login' exact element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/Login" />} />
    </Routes>
  )
}

export default App;
