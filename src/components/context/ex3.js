import { useEffect, useState } from "react";

const URL=`https://fakestoreapi.com/`

function Appapp(){
    const [data,setData]=useState(0)

    useEffect(()=>{
        const fetchData=async()=>{
            const result=await  fetch(URL)
            console.log(result)
        }
        fetchData()
    },[])

    return(
        <div>{data}</div>
    )
}

  export default Appapp