import { useEffect, useState } from "react"

const addProfileHoc=(WrappedComponent)=>{
    return (props)=>{
        const [data,setData]=useState({})
        useEffect(()=>{
            const data={
                name:"raghu",
                salary:9000,
            }
            setData(data)
        },[])
        return <WrappedComponent data={data} {...props}/>
    }
}
export default addProfileHoc;

