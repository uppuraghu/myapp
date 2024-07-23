import React,{useContext} from 'react'
import { store } from '../App'

const Component2 = () => {
    const [data,setData] = useContext(store)    
  return (
    <div className='card'>
    <div className='card-body'>
     component2 {data}
</div>
</div>
  )
}

export default Component2
