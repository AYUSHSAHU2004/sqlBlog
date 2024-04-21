import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllBlogs from './Pages/AllBlogs'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserBlogs from './Pages/UserBlogs'
import Create from './Pages/Create'
import Edit from './Pages/Edit'
import Search from './Search'

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<AllBlogs/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/userblogs' element={<UserBlogs/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App