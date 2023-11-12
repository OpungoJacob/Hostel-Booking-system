import React from "react";
import {Link} from 'react-router-dom';
import {useState} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Login(){
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
         .then(result => {
            console.log(result)
                if(result.data === "success"){
                    navigate('/pages/Home')
                }
            
        })
         .catch (err=> console.log(err))
    }

    return(
        <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-secondary"> 
           <div className="form_container border p-5 rounded bg-white">
           <form onSubmit={handleSubmit}>
                <h3 className="text-center">Sign In</h3>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <input type="checkbox" className="custom-control custom-checkbox" id="check"/>
                    <label htmlFor="check" className="custom-input-label ms-2">
                        Remember me
                    </label>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary"
                    type="submit"
                    >Sign In</button>

                </div>
                <p className="text-center mt-2 ">
                Forgot Password!  <a href=""> </a><Link to="./pages/Signup" className="ms-2">Sign Up</Link> 
                </p>
            </form>
           </div>
           
        </div>
    )
}
