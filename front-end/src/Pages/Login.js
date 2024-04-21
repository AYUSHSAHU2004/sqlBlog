import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
 var navigate = useNavigate();
 const [value,setValue] = useState({
    UserName:'',
    PassWord:''
 })

//  const localStorageLength = localStorage.length;

function countLocalStorageKey(key) {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === key) {
            count++;
        }
    }
    return count;
}


const keyToCheck = "UserName";
const occurrenceCount = countLocalStorageKey(keyToCheck);

 const handleSubmit = (e) => {
    e.preventDefault();
    if(occurrenceCount >= 1){
        alert("An user already logged in");
        navigate("/userblogs");
        return;
    }
    axios.post('http://localhost:8081/login',value)
    .then(res=>
        
        {alert(res.data);
            if(res.data == 'WRONG PASSWORD'){
                return;
            }
            if(res.data == 'register first'){
                navigate('/register');
                return;
            }
            navigate('/userblogs');
            localStorage.setItem("UserName",JSON.stringify(value));
        
        }
        
        )
    
    .catch(err=>console.log(err));
 }
  return (
    <>
    <h1>Login</h1>
            <form className='form2' onSubmit={handleSubmit}>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>setValue({...value,UserName:e.target.value})}/>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e=>setValue({...value,PassWord:e.target.value})}/>
                </div>
        
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
    </>
  )
}

export default Login