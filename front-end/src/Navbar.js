import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Navbar.css';
function Navbar() {
  
  const [Sinput,setSinput] = useState({
    Sinput:""
  });
  const navigate = useNavigate();
  const [arrData,setArrData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //localStorage.setItem("Sitem",JSON.stringify(Sinput));
    axios.post('http://localhost:8081/search',Sinput).then(res=>{console.log(res.data);setArrData(res.data);localStorage.setItem("Searched",JSON.stringify(res.data))}).catch(err=>console.log(err));
    navigate('/search');
  }
  
  const removestore = () =>{
    localStorage.removeItem("UserName");
  }
  return (
    <>
         <nav  className="nav1  navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FaceGram</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to="/login" class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </Link>
        <Link to="/register" class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </Link>
        <Link to="/login" class="nav-item" onClick={removestore}>
          <a class="nav-link" href="#">LogOut</a>
        </Link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs
          </a>
          <ul class="dropdown-menu">
            <Link to="/"><a class="dropdown-item" href="#">ALL Blogs</a></Link>
            <Link to="/userblogs"><a class="dropdown-item" href="#">User Blogs</a></Link>
            <li><hr class="dropdown-divider"/></li>
            <Link to="/create"><a class="dropdown-item" href="#">Create YOUR Blog</a></Link>
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <input class="form-control me-2" type="search" onChange={(e)=>{
          setSinput({...Sinput,Sinput:e.target.value})
        }} placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar