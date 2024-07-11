import React, { useContext } from 'react'
import Navbar from '../navbar/navbar';
import { Link, Outlet } from 'react-router-dom';
import { ProfileWrapper } from '../../Navigations/stack';
import { Image } from 'react-bootstrap';

function ContactScreen() {
  const profileInfo =useContext(ProfileWrapper)
console.log(profileInfo)
   
  const changeName=()=>{
    debugger
    profileInfo.newName(<img src='https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg'/>)
  }
  return (
    <div>
        <Navbar/>
      <h2>wellcome to contact screen  {profileInfo.profileInfo.name}</h2>
      <button onClick={changeName}>Change name</button>
      <Link to={"doctors"}>Doctors</Link>
      <Link to={"engineers"}>engineers</Link>
      <Outlet/>
    </div>
  )
}

export default ContactScreen;
