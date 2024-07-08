import React, { useEffect } from 'react'

function UseEffectEX3() {
    useEffect(()=>{
        window.addEventListener("mousemove",captureMouse)
        return ()=>{
            //clean up ,prevent leak
            window.removeEventListener("mousemove",captureMouse)                // by using this we only count the home screen movse move count
        }                                                                           // while you are leaving a component  ,return will execute

    },[])

    const captureMouse=(event)=>{
        console.log(event.clientX,"X-AXIS")
        console.log(event.clientY,"Y-AXIS")
    }

  return (
    <div>
      UseEffectEX3
    </div>
  )
}

export default UseEffectEX3
