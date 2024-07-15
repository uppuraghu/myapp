import { useState } from "react";


const EmployeeScreen=()=>{
    const [flag,setFlag]=useState(false)
    return(
        <>
       
        <button onClick={()=>setFlag(!flag)}>Flag change</button>
        {flag ? <h2>flag is true</h2> : <h2>flag is false   </h2>}
        </>
    )
     

}
export default EmployeeScreen;