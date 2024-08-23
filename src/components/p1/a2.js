import { useState } from "react"

const Car =()=>{
    const [carName,setCarname]=useState(props.nName)
   

    return(
        <div>
           
            <input type="text" placeholder="enter the car name " onChange={(e)=>setCarname(e.target.value)}/>   
            <p>my car name is {carName}</p>
        </div>
    )
}
export default Car