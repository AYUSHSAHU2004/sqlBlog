import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Blogs.css';
import { useNavigate } from 'react-router-dom';
function UserBlogs() {
 const UserName = JSON?.parse(localStorage?.getItem("UserName"));
 const [datas,setDatas] = useState([]);
 const [id,setId] = useState();
 const navigate = useNavigate();
 
 useEffect(()=>{
    
    axios.post('http://localhost:8081/userblogs',UserName).then(res=>setDatas(res.data)).catch(err=>console.log(err));

 },[datas])
  return (
   <>
   <h1>USER BLOGS</h1>
         {
            datas?.map(data => 
            
                <div className="card" style={{"width":"18rem"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{data?.BlogTitle}</h5>
                        <p className="card-text">{data?.BlogText}</p>
                        <a href="#" className="btn btn-primary" onClick={()=>{localStorage.setItem("id",data?.BlogId);navigate('/edit')}}>Edit</a>
                        <a href="#" className=" del btn btn-primary" onClick={()=>{axios.post('http://localhost:8081/delete',{BlogId:data?.BlogId}).then(res=>console.log(res)).catch(err=>console.log(err));}}>Delete</a>
                    </div>
                </div>
            
            
            )
        }


   </>
  )
}

export default UserBlogs