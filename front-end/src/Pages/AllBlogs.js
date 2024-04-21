import React, { useEffect, useState } from 'react'
import './Card.css'
import axios from 'axios';
import './Blogs.css';
function AllBlogs() {
 const[datas,setData] = useState([]);
 useEffect(()=>{
    axios.get('http://localhost:8081/').then(res => setData(res.data)).catch(error=>console.log(error));
 },[]);

  return (

    <>
        <h1>ALL BLOGS</h1>
        {
            datas?.map(data => 
            
                <div className="card" style={{"width":"18rem"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{data.BlogTitle}</h5>
                        <p className="card-text">{data.BlogText}</p>
                        <a href="#" className="btn btn-primary">Show More</a>
                    </div>
                </div>
            
            
            )
        }




        
    </>
  )
}

export default AllBlogs