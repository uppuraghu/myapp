import { useState } from "react";

const UseStateExample=()=>{
    const initialstate=10
   const[count, setCount]= useState(initialstate)

//    const incrementHandler=()=>{
//     setCount((count)=>count+1)
//     // setCount(count+1)
   
//    }
//    const decrementHandler=()=>{
//     if(count>0){
//         setCount((count)=>count-1)
//     }
   
//     // setCount(count+1)
   
//    }
//    const resetHandler=()=>{
//     setCount(0)
//     // setCount(count+1)
   
//    }

    const counterrhandler=(type,scale)=>{
        switch(type){
            case "INCREMENT":
                setCount((count)=>count+scale);
                break;
                case "DECREMENT":
                    if(count>0){
                        setCount((count)=>count-scale);
                    }
               
                break;
                case "RESET":
                setCount(0);
                break;
                default:
                    break;

        }
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={()=>counterrhandler("INCREMENT",10)}>Increment</button>
        <button onClick={()=>counterrhandler("DECREMENT",10)}>Decrement</button>
        <button onClick={()=>counterrhandler("RESET")}>reset</button>
    </>

    )
       
    
}
export default UseStateExample;