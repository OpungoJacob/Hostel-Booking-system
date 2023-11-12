import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"

export default function Signup(){
    const [surname, setSurname] = useState()
    const [othernames, setOthernames] = useState();
    const [ email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{surname, othernames, email, password})
         .then(result => {console.log(result)
            navigate('/')
        })
         .catch (err=> console.log(err))
    }

    return(
        <div className="Signup template d-flex justify-content-center align-items-center  vh-100 bg-secondary"> 
        <div className="form_container border p-5 rounded bg-white">
        <form onSubmit = {handleSubmit}>
             <h3 className="text-center">Sign Up</h3>
             <div className="mb-2">
                 <label htmlFor="surname">Surname</label>
                 <input type="text" placeholder="Enter your  surame" className="form-control"
                    onChange={(e) => setSurname(e.target.value)}
                 />
             </div>
             <div className="mb-2">
                 <label htmlFor="Othernames">Other names</label>
                 <input type="text" placeholder="Enter your other names" className="form-control"
                    onChange={(e) => setOthernames(e.target.value)}
                 />
             </div>
             <div className="mb-2">
                 <label htmlFor="email">Email</label>
                 <input type="text" placeholder="Enter your email" className="form-control" 
                    onChange={(e) => setEmail(e.target.value)}
                 />
             </div>
             <div className="mb-2">
                 <label htmlFor="password">Password</label>
                 <input type="password" placeholder="Enter Password" className="form-control" 
                    onChange={(e) => setPassword(e.target.value)}
                 />
             </div>
            
             
             <div className="d-grid">
                 <button type="submit" className="btn btn-primary">Sign Up</button>

             </div>
             <p className="text-center mt-2 ">
                Already Registered <a href="#"> </a><Link to="/" className="ms-2">Sign in</Link> 
             </p>
         </form>
        </div>
        
     </div> 
    )
}
