import { useMemo, useState } from "react";

const EvenChecker=()=>{
    const [counter1,setCounter1]=useState(1)
    const [counter2,setCounter2]=useState(0)
    const [isLogin,setIsLogin]=useState(false)
    
    const counter1Handler=()=>{
        setCounter1(counter1+1)
    }
    const counter2Handler=()=>{
        setCounter2(counter2+1)
    }

   const isEven= useMemo(()=>{
        console.log("isEven executing....")
        for(let i=0;i<10000;i++){}
        return counter1%2===0 ? "EVEN":"ODD"
    },[counter1][counter2])

  

    return(
        <>
        <h3>Even Checker</h3>
        <h3>Counter-1 value {counter1} {isEven} </h3>
        <h3>Counter-2 value {counter2}</h3>
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={counter1Handler}>Increase count 1</button>
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={counter2Handler}>Increase count 2</button>
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={()=> setIsLogin(!isLogin)}>Change Login</button>
        {isLogin ? <h1>Wellcome user</h1> : <h1>Please</h1>}
        </>
    );
};
export default EvenChecker