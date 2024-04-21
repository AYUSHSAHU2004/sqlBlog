import React, { useState } from 'react'
import axios from 'axios';
import './Create.css'
import { useNavigate } from 'react-router-dom';
function Edit() {
    const navigate = useNavigate();
    const id = JSON.parse(localStorage.getItem("id"));
    const [datas,setDatas] = useState({
        BlogTitle:"",
        BlogText:"",
        BlogId:id
    });
    const handleEdit = (e) =>{
        e.preventDefault();
        console.log(id);
        axios.post('http://localhost:8081/edit',datas).then(res=>{console.log(res);alert("edited ur blog");localStorage.removeItem("id");navigate('/userblogs')}).catch(err => console.log(err));

    }
  return (
    <>
        <form className='box' onSubmit={handleEdit}>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={e => setDatas({...datas,BlogTitle:e.target.value})}  placeholder=" Edit Title of Blog"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Edit Your Blog</label>
            <textarea className="form-control" id="Write Your Blog"  onChange={e => setDatas({...datas,BlogText:e.target.value})} rows="3"></textarea>
        </div>
        <button type="submit"  className="btn btn-primary">Edit</button> 
        </form>
    </>
  )
}

export default Edit