import axios from "axios"
import { useEffect, useState } from "react"

const useAxios=(URL="https://fakestoreapi.com/products")=>{
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetchData()   
    },[])

    const fetchData=async()=>{
        try{
            const {data,status}= await axios.get(URL)
            if(status===200){
             setData(data)
            }
        }catch(err){
            setError(err)
            console.log(err)
        }finally{
            setLoading(false)
        }
      
    }
    return [data,error,loading]
}
export default useAxios