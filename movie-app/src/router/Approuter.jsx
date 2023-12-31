import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import MovieDetail from '../pages/MovieDetail'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'
import PrivateRouter from './PrivateRouter'

const Approuter = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<PrivateRouter/>}>
        <Route path='/details/:id' element={<MovieDetail/>}/>
        </Route>
    </Routes>
    
    </>
  )
}

export default Approuter