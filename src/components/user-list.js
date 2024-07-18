import React from 'react'
import useAxios from './customHooks/use-axios';

function Userlist() {
    const [users,error,loading] =useAxios("https://fakestoreapi.com/users")

     
  return <div>
{
        users.map(eachUser=>{return(
            <>
                <h5>{eachUser.username}</h5>
            </>
        )})
    }

  </div>
    
  
}

export default Userlist;
