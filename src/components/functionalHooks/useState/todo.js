import { useState } from "react";

const TodoComponent=()=>{
    const initialState=[
        {
            id:1,
            perios: "Morning",
            routine: ["wake up aT 8am","breakfast at 9am","class at 10am"]
        },
        {
            id:2,
            perios: "Afternoon",
            routine: ["lunch  aT 1pm","break at 4pm","class at 2pm"]
        },
    ]
   

   const[todos,setTodos]= useState(initialState)
   const addNewTodo=()=>{
    const dummyTodo=  {
        id:3,
        perios: "evening",
        routine: ["snaks   aT 5pm","insta at 6pm","whatsapp at 7pm-3am"],
    }

     const dummyIncludes=todos.find(
        (eachTodo)=>eachTodo.id===dummyTodo.id
    )
     const updateTodos=[...todos,dummyTodo]
     if(!dummyIncludes){
        setTodos(updateTodos)
     }


   }


   const removeRoutineHandler=(each)=>{
    const id=each.id;

    const filteredData=todos.filter((eachTodo)=>eachTodo.id !=id)
    setTodos(filteredData)

   }
    return (
        <>
    <button onClick={addNewTodo}>Add New Todo</button>
     {
        todos.map(each=>{
            return(
                <>
                <h3>{each.perios}</h3>
                <button onClick={()=>removeRoutineHandler(each)}>remove routine</button>
                {
                    each.routine.map(eachRoutine=>{
                        return(
                            <>
                            <h5>{eachRoutine}</h5>
                            </>
                        )
                    })
                }
                </>
            )
        })
    }
    </>
    )
   
}
export default TodoComponent;