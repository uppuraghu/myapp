import { useCallback, useState } from "react"
import ButtonComponent from "../button/button"

const UseCallbackExample=()=>{
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(10000)

    const ageHandler=useCallback(()=>{
        setAge(age + 1)
    },[age])

    const salaryHandler=useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])

 
    return(
        <>
        <h3>hello</h3>
        <h3>Age {age}</h3>
        <h3>Salary {salary}</h3>
        <ButtonComponent onPress={ageHandler} text={"increase age"}/>
        <ButtonComponent onPress={salaryHandler} text={"increase salary"}/>
        </>
    )
}
export default UseCallbackExample