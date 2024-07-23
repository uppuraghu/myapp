import React,{useContext} from 'react'
import { store } from '../App'

const Component1 =() =>{
    const [data,setData] = useContext(store)     //by using this store we are reasignng this values,it will asign
  return (
    <div className='card'>
        <div className='card-body'>
         Component1 {data}
    </div>
    </div>
  )
}

export default Component1
