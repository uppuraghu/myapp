import React, { useContext } from 'react'
import { content } from './usecontext'
 
const Display = () => {
   const showData=useContext(content)
    
  return (
    <div>
      <h1>{showData}</h1>

    </div>
  )
}

export default Display