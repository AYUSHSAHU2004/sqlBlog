import React, { useState } from 'react'
import './Create.css'
import { useActionData, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Create() {
  const navigate = useNavigate();
  const UserLog = JSON.parse(localStorage.getItem("UserName"))?.UserName;
  const [datas,setDatas] = useState({
    BlogTitle:'',
    BlogText:"",
    UserName:UserLog
  })
  const handleSubmit =(e) => {
    e.preventDefault();
    if(!datas.BlogTitle || !datas.BlogText){
        alert("fill all the feilds");
        return;
    }
    if(!UserLog){
        alert("Login First");
        navigate('/login');
        return;
    }
    axios.post('http://localhost:8081/create',datas).then(res => {console.log(res);alert("created your blog");navigate('/userblogs')}).catch(err => console.log(err));
  }
  return (
    <>
        <form className='box' onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  onChange={e => setDatas({...datas,BlogTitle:e.target.value})} placeholder="Title of Blog"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Write Your Blog</label>
            <textarea class="form-control" id="Write Your Blog" onChange={e => setDatas({...datas,BlogText:e.target.value})} rows="3"></textarea>
        </div>
        <button type="submit"  className="btn btn-primary">Create</button> 
        </form>
    </>
  )
}

export default Create