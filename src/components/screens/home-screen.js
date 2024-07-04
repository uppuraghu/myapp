import React from 'react'
import Navbar from '../navbar/navbar'
import ButtonComponent from '../button/button'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div>
      <h2>wellcome to home screen</h2>
      <Navbar/>
      {

        [1,2,3,4,5,6,7,8,9,10].map((each)=>{
          return(
            <Link to={`/hyderabad/${each}/info`}>
            
          <ButtonComponent text={each}/>
          </Link>
          )
        })
      }
    </div>
  )
}

export default HomeScreen
