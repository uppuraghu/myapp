import React, { useContext } from 'react'
import Navbar from '../navbar/navbar'
import { ProfileWrapper } from '../../Navigations/stack'
import ButtonComponent from '../button/button'
import addProfileHoc from '../hoc/profile-hoc'

function SettingScreen(props) {
  const sharedData = useContext(ProfileWrapper)

  console.log(props,"from setting screen")

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
      <h3>wellcome {props.data.name}</h3>
    </div>
  )
}

export default addProfileHoc(SettingScreen)