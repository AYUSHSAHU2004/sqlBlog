import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function Register() {
    var navigate = useNavigate();
    const [value,setValue] = useState({
        Email:"",
        UserName:"",
        PassWord:""
    });
    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/register',value)
        
        .then(res=>{
             console.log(res.data.message);
            if(res.data.message == 'user exists'){
                alert("user already registered");
                
                navigate('/login');
            }
            if(res.data.message == 'inserted'){
                alert("registered");
                navigate('/login');
            }
        
        })
        
        .catch(err=>console.log(err))

    }

  return (
    
    <>
    <h1>Register</h1>
        <form className='form2' onSubmit={handleSubmit} >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>setValue({...value,Email:e.target.value})}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>setValue({...value,UserName:e.target.value})}/>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e=>setValue({...value,PassWord:e.target.value})}/>
                </div>
        
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
    </>
  )
}

export default Register