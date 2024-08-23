import  {useState} from "react";
export function Raghu(){
    const [value , updateValue] =useState(
        {name:"raghu",
         friend:"chintu",
         lover:"paamu"
    })
    function updateSet(){
        updateValue({
            name:"rp",
            friend:"oc",
            lover:"mc"
        })
        
    }                                       

    return(
    <div>
    <h1>
        my name is {value.name}  and my  friend name   is {value.friend} and lover namr is {value.lover}
    </h1>
    <button onClick={updateSet} value={value} name="UPDATE">UPDATE</button>
    </div>
    )
}