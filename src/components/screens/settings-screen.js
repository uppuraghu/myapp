import React, { useContext } from 'react'
import Navbar from '../navbar/navbar'
import { ProfileWrapper } from '../../Navigations/stack'
import ButtonComponent from '../button/button'

function SettingScreen() {
  const sharedData = useContext(ProfileWrapper)

  const changeCount=()=>{
    sharedData.changeCounter()
  }
   
  const decrementHandler=()=>{
    
    sharedData.decrementHandler()
  }

  return (
    <div>
      <Navbar/>
      <h2>wellcome to settingscreen current count {sharedData.counter}</h2>
      <ButtonComponent text={"Increment"} onPress={changeCount}/>
      <ButtonComponent text={"Decrement"} onPress={decrementHandler}/>
    </div>
  )
}

export default SettingScreen