import React, { useState } from 'react';

import Navbar from '../navbar/navbar';
import axios from 'axios';

import ButtonComponent from '../button/button';
import { Link } from 'react-router-dom';


function HomeScreen() {
 
  const [data, setData]=useState([])

  const fetchData=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    if(response.status===200){
      setData(response.data)
    }
  }

  return (
    <div>
      <Navbar />
      <h2>Welcome to Home Screen</h2>

    <button onClick={fetchData}>  Fetch data</button>

    {
      data.length>0?(
        <>
       
        {data.map((each) => {
              return (
                <Link to={`/${each.category}/${each.id}/info`}>

                 <ButtonComponent text={each.title}/>
                 </Link>
             
                
             
               )
           })}
          </>   
      ):(

        <h5>no products found</h5>
      )
      

    }
    </div>
  );
}

export default HomeScreen;


      // {/* {
      //   [1,2,3,4,5,6,7,8,9,10].map((each) => {
      //     return (
      //       <Link to={`/hyderabad/${each}/info`} key={each}>
      //         <ButtonComponent text={each} />
      //       </Link>
      //     )
      //   })
      // } */}