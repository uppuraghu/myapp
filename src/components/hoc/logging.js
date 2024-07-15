import { useEffect } from "react"

const loggingComponent=(wrappedComponent)=>{
    return(props)=>{
        useEffect(()=>{
            console.log(props);
        },[props]);
      return  <wrappedComponent/>
    }
}
export default loggingComponent;