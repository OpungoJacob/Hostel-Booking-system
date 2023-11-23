import React from 'react';
import './styles.modules.css';
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios'

function Signup() {

    const[data, setData] = useState({
        surname:"",
        othername: "",
        email:"",
        password:""

    })
    const [error, setError]   = useState("") 
    const navigate = useNavigate();

        const handleChange = ({currentTarget: input}) =>{
            setData({...data,[input.name]:input.value})
        };

        const handleSubmit = async (e) =>{
            e.preventDefault();
            try{
                const url = "http://localhost:8080/api/users";
                const {data:res} = await axios.post(url,data);
                navigate("/Login")
                console.log(res.message);
            }catch(error){
                    if(error.response && error.response.status >=400 &&
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
                <h1>Welcome Back</h1>
                <Link to='/login'>
                    <button type='button' className="white_btn">Sign in</button>
                </Link>
            </div>
            <div className="right">
               <form className="form_container" onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input  type='text' placeholder='Surname' 
                    name='surname' value={data.surname}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                    <input  type='text' placeholder='Othername' 
                    name='othername' value={data.othername}
                    required
                    className="input"
                    onChange={handleChange}
                    />
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
                    {error && <div className="styles.error_msg">{error}</div>}
                    <button type='submit' className="green_btn">
                        Sign Up
                    </button>
                </form> 
            </div>
        </div>
    </div>
    
  )
}

export default Signup;
