import React, { useEffect, useState } from 'react'

function UseEffectExample2() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect (()=>{
        console.log("useEffect executing..")
        document.title=`React count ${count1}`
    },[])

    const countHandler1=()=>{
        setCount1(count1+1)
    }

    const countHandler2=()=>{
        setCount2(count2+1)
    }
  return (
    <div>
     <h2>count1 {count1}</h2>
     <button onClick={countHandler1}>Increase count 1</button>

     <h2>count1 {count2}</h2>
     <button onClick={countHandler2}>Increase count 2</button>
    </div>
  )
}

export default UseEffectExample2
