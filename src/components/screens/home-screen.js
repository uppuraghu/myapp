import React, { useContext } from 'react';

import Navbar from '../navbar/navbar';
// import axios from 'axios';

// import ButtonComponent from '../button/button';
// import { Link } from 'react-router-dom';
import { ProfileWrapper } from '../../Navigations/stack';
import UseReducer from '../useReducer/useReducer';


function HomeScreen() {
 const sharedData=useContext(ProfileWrapper)
 console.log(sharedData,"sharedData")
  

  return (
    
    <div>
      <Navbar/>
      <UseReducer/>
      <h2>wellcome to home screen {sharedData.profileInfo.name} {" "}{sharedData.profileInfo.salary}</h2>
      <h4>{sharedData.counter}</h4>
    </div>
  );
}

export default HomeScreen;


   