import React, {useReducer} from "react"

const Reducer=(state,action)=>{
    switch (action.type){
        case "INCREMENT":
        return {...state,count:state.count+1}
        case "DECREMENT":
        return {...state,count:state.count-1}
        case "RESET":
        return {...state,count:0}
        default:
            return state
    }
}

const Countrap=()=>{
    const [state,dispatch]=useReducer(Reducer,{count:0})
    return(
        <div>
            <p>count: {state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>INCR</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>DFNCR</button>
            <button onClick={()=>dispatch({type:'RESET'})}>R</button>
        </div>
    )
}
export default Countrap