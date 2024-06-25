import axios from "axios";
import React, { Component } from "react";
class ProductListing extends Component {
    // state = {
    //     productListing: [],
    //     loading: false,
    //     error: null,
    // };
    constructor(){
        super()
        this.state={
            productListing: [],
                loading: false,
                error: null,
                additional:{
                    one:"one",
                }

        }
    }

    componentDidMount() {
        console.log("componentDidMount invoked...");
        // this.fetchData();
        document.title="my project"
    }

    // fetchData = () => {
    //     this.setState({
    //         loading: true,
    //     });
    //     fetch("https://fakestoreapi.com/products")
    //         .then((response) => response.json())
    //         .then((data) =>
    //             this.setState({
    //                 productListing: data,
    //                 loading: false,
    //             })
    //         )
    //         .catch((error) =>
    //             this.setState({
    //                 error: error.message,
    //                 loading: false,
    //             })
    //         );
    // };

        fetchData = async()=>{
            this.setState({
                                loading: true,
                            });
                            try{
                                const response1=    await axios.get("https://fakestoreapi.com/products")
                                console.log(response1,"response1")

                                if(response1.status===200){
  this.setState({
                            productListing: response1.data,
                            loading: false,
                        })
                                }
       
                            }catch(err){
                                console.error(err)
                                this.setState({
                                    error:"server is busy"
                                })
                            }finally{
                                this.setState({
                                    loading:false,
                                })
                            }
                     
        }

    render() {
        console.log("render invoked...");
        return (
            <>
                <h3>Product Listing Page</h3>

                {this.state.loading ? (
                    <>
                        <h3>Please wait...</h3>
                        
                    </>
                ) : (
                    <div>
                        {this.state.productListing.map((eachObject) => (
                            <h3 key={eachObject.id}>{eachObject.title}</h3>
                        ))}
                    </div>
                )}
            </>
        );
    }
}

export default ProductListing;
