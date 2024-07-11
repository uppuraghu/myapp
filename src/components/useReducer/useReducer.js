// import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react"

const reducerFunction=(state,action)=>{
    debugger;
    switch(action.type){
        case "BOOK_TICKETS":
            return {...state,bookedTickets:state.bookedTickets+action.noOfTickets,totalAvalibleTickets:state.totalAvalibleTickets-action.noOfTickets,}
            case "HOLD_TICKETS":
                return {...state,holdTickets:state.holdTickets+action.noOfTickets}
                default:
                    return state;
    }
}

    const state={
        totalAvalibleTickets:100,
        bookedTickets:20,
        holdTickets:20,
    }

const UseReducer = () => {
  const [currentState, dispatch]=  useReducer(reducerFunction, state)

  const  bookingFunction=()=>{
    debugger;
    dispatch({
        type:"BOOK_TICKETS",
        noOfTickets:1,
    })
  }

  const holdingTicketFunction=()=>{
    dispatch({
        type:"HOLD_TICKETS",
        noOfTickets:1,
    })
  }
    return (
        <>
             <h2>Availble tickets{currentState.totalAvalibleTickets}</h2>
             <h2>Booked tickets{currentState.bookedTickets}</h2>
             <h2>Hold tickets{currentState.holdTickets}</h2>

             <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={bookingFunction}>Book Tickets</button>
             <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={holdingTicketFunction}>Hold Tickets</button>
        </>
    );
    
};
export default UseReducer;