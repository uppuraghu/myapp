import React, { useContext } from 'react';

import Navbar from '../navbar/navbar';
// import axios from 'axios';

// import ButtonComponent from '../button/button';
// import { Link } from 'react-router-dom';
import { ProfileWrapper } from '../../Navigations/stack';
import UseReducer from '../useReducer/useReducer';
import UseReducerEx1 from '../useReducer/useReducerEx1';
import addProfileHoc from '../hoc/profile-hoc';
import EmployeeScreen from '../employeprofile/employeProfile';


function HomeScreen(props) {
 const sharedData=useContext(ProfileWrapper)
 console.log(props,"from HomeScreen")
 console.log(sharedData,"sharedData")
  

  return (
    
    <div>
      <EmployeeScreen/>
      <Navbar darkTheme={true}/>
      <UseReducer />
      <UseReducerEx1 count={10}/>
      <h2>wellcome to home screen {sharedData.profileInfo.name} {" "}{sharedData.profileInfo.salary}</h2>
      <h4>{sharedData.counter}</h4>
      <h2>Good Morning {props.data.name}</h2>
    </div>
  );
}

export default addProfileHoc(HomeScreen);


   