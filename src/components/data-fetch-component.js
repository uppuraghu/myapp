import useAxios from "./customHooks/use-axios";

const DataFetch=()=>{
   const[data,error,loading] = useAxios()
   const [category,categoryError,categoryLoading]=useAxios(
    "https://fakestoreapi.com/products/categories"
   )
    
   console.log(data,error,loading,"data-fetch-component")


   if(loading){
    return <h4>loading.... please wait</h4>
   }
   if(error){
    return <h2>something went wrong please try again later</h2>
   }
    return(
        <>
        <h2>Data fetch component</h2>
        {data.map((each)=>{
            return <h4>{each.title}</h4>
        })

        }
        <h2>Category list</h2>
        {/* {categories.map((each)=>{
            return <h4>{each}</h4>
        })} */}
    </>
    )
  
}
export default DataFetch;