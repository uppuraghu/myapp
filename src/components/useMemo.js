import { useMemo, useState } from "react";

const EvenChecker=()=>{
    const [set,setSet]=useState(10)

    const incrementHAndler=()=>{
        setSet(set +1)
    }

   const isEven= useMemo(()=>{
        console.log("is even")
        for(let i=0;i<100;i++){}
        return set%2===0 ? "EVEN":"ODD"
    },[set])

    return(
        <>
        <h3>Even Checker</h3>
        <h3>number checker {set} {isEven} </h3>
        <button   onClick={incrementHAndler}>click me </button>
        </>
    );
};
export default EvenChecker