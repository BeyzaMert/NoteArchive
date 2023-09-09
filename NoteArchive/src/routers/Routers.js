// import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Arsiv from '../pages/Arsiv'
import Cart from '../pages/Cart'
import ArsivDetail from '../pages/ArsivDetail'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import NotYukle from '../pages/NotYukle'
import VizefinalSoru from '../pages/VizefinalSoru'
import VizefinalDetail from '../pages/VizefinalDetail'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>} />
    <Route path='arsiv' element={<Arsiv/>} />
    <Route path='cart' element={<Cart/>} />
    <Route path='arsiv/:id' element={<ArsivDetail/>} />
    <Route path='checkout' element={<Checkout/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='notyukle' element={<NotYukle/>} />
    <Route path='vizefinalYukle' element={<VizefinalSoru/>} />
    <Route path='vizefinaldetail' element={<VizefinalDetail/>} />



  </Routes>
}

export default Routers
