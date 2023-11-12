import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import MovieDetail from '../pages/MovieDetail'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'

const Approuter = () => {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/details/:id' element={<MovieDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter