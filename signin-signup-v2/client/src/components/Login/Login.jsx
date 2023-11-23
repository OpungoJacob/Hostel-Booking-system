import React from 'react';
// import './styles.modules.css'
import './login.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

function Signup() {

    const[data, setData] = useState({
        email:"",
        password:"",

    })
    const [error, setError]   = useState("") 
    

        const handleChange = ({currentTarget: input}) =>{
            setData({...data,[input.name]:input.value})
        };

        const handleSubmit = async (e) =>{
            e.preventDefault();
            try{
                const url = "http://localhost:8080/api/auth";
                const {data:res} = await axios.post(url,data);
                localStorage.setItem("token",res.data);
                window.location = "/"
            }catch(error){
                    if(error.response && error.response.status >= 400 &&
                        error.response.status <= 500
                        ){
                                setError(error.response.data.message)
                        }
            }
        }


  return (
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="left">
          
                <h1>New Here!</h1>
                <Link to='/Signup'>
                    <button type='button' className="white_btn">Sign Up</button>
                </Link>

            </div>
            <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
                    <h1>Login your Account</h1>
                    
                    <input  type='text' placeholder='Email' 
                    name='email' value={data.email}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                    <input  type='password' placeholder='Password' 
                    name='password' value={data.password}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                    {error && <div className="error_msg">{error}</div>}
                    <button type='submit' className="green_btn">
                        Sign In
                    </button>
                </form> 
              
            </div>
        </div>
    </div>
  )
}

export default Signup;
