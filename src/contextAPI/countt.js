import React,{useContext} from 'react'
import { store } from '../App';

const Countt = () => {
    const [data,setData] = useContext(store)  
  return (
    <div className='card'>
      <div className='card-body'>
       <h2 className='card-title'>count: {data.length}</h2>
      </div>
    </div>
  )
}

export default Countt;
