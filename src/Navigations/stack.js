import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../components/screens/home-screen'
import AboutScreen from '../components/screens/about-screen'
import ContactScreen from '../components/screens/contact-screen'
import SettingScreen from '../components/screens/settings-screen'
import invalidscreen from '../components/screens/invalid-screen'
import ProductDetail from '../components/screens/products-details-screen'

function Stacks() {
  return (
 <BrowserRouter>
 <Routes>

    <Route path='/' Component={HomeScreen}/>
    <Route path='/about' Component={AboutScreen}/>
    <Route path='/contact' Component={ContactScreen}/>
    <Route path='/settings' Component={SettingScreen}/>

    <Route path='/:location/:restaurantId/info' Component={ProductDetail}/>

    <Route path='*' Component={invalidscreen}/>

 </Routes>
 </BrowserRouter>
  )
}

export default Stacks
