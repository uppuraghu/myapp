import React from 'react'
import useCounter from './use-counter'

function Counterexample() {
   const [count,incrementCount,decrementCount,resetCount]= useCounter(10,10)
   const [age,incrementAge,decrementAge,resetAge]= useCounter(100,1)
   const [salary,incrementSalary]= useCounter(1000,1000)

  return (
    <div>
            <h2>{count}</h2>
            <h2>{age}</h2>
            <h2>{salary}</h2>
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={()=>incrementCount(10)}>Increment count</button>
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={incrementAge}>Increment age</button>
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={incrementSalary}>increment salary</button>
            {/* <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={resetCount}>reset count</button> */}
    </div>
  )
}

export default Counterexample;
