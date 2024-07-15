import React, { createContext, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../components/screens/home-screen'
import AboutScreen from '../components/screens/about-screen'
import ContactScreen from '../components/screens/contact-screen'
// import SettingScreen from '../components/screens/settings-screen'
import ProductDetail from '../components/screens/products-details-screen'
import Doctorscreen from '../components/screens/doctor-screen'
import Engineerscreen from '../components/screens/engneer-screen'
import InvalidScreen from '../components/screens/invalid-screen' 
// import UseReducer from '../components/useReducer/useReducer'
// import UseReducerEx1 from '../components/useReducer/useReducerEx1'
// import LazySetting=React.lazy(()=>import("../components/screens/settings-screen"))
const LazySetting=React.lazy(()=>import("../components/screens/settings-screen"))

export const ProfileWrapper=createContext()

function Stacks() {
  const [profileInfo,setProfileInfo]=useState({
    name:"ram",
    salary:20000,
  })

  const[counter,setCounter]=useState(100)

  const newName=(name)=>{
    debugger;
    setProfileInfo({...profileInfo,name:name})
  }

  const changeCounter=()=>{
    setCounter(counter+100)
  }

  const decrementHandler=()=>{
    if(counter > 0){
      setCounter(counter-100)
    }
   
  }

  return (

      <ProfileWrapper.Provider value={{
        profileInfo,
        newName,
        counter:counter,
        changeCounter:changeCounter,
        decrementHandler:decrementHandler,
      }}>      
           {/* value is a PROP */}
     
     
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
    </ProfileWrapper.Provider>
  )
}

export default Stacks



