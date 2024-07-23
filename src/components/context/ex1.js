import { createContext, useState } from "react"
import Display from "./show"


export const content=createContext()
export const Usecontext=()=>{
    const[data,setdata]=useState("satya")
        
    // const newName=()=>{
    //     setdata({...data})
    // }
    return(
        <content.Provider value={data }>
            <Display/>
        </content.Provider>
        )
}