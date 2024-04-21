import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
function Search() {


const [data,setData] = useState([]);
var searched = JSON.parse(localStorage.getItem("Searched"));
useEffect(()=>{

    setData(searched);
    console.log(data);
},[])
  return (
    <>
        {
            data?.map(da => {



                <h1>{da.BlogTitle}</h1>
            })
        }
    </>
  )
}

export default Search