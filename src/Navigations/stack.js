import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../components/screens/home-screen'
import AboutScreen from '../components/screens/about-screen'
import ContactScreen from '../components/screens/contact-screen'
// import SettingScreen from '../components/screens/settings-screen'
import ProductDetail from '../components/screens/products-details-screen'
import Doctorscreen from '../components/screens/doctor-screen'
import Engineerscreen from '../components/screens/engneer-screen'
import InvalidScreen from '../components/screens/invalid-screen' 
// import LazySetting=React.lazy(()=>import("../components/screens/settings-screen"))
const LazySetting=React.lazy(()=>import("../components/screens/settings-screen"))

function Stacks() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/doctors' element={<Doctorscreen />} />
        <Route path='/engineers' element={<Engineerscreen />} />

        <Route path='/settings' element={
          <Suspense fallback={<div>Loading</div>}>
<LazySetting />
          </Suspense>
          } />
        <Route path='/:category/:productId/info' element={<ProductDetail />} />
        <Route path='*' element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Stacks



