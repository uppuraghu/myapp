import React, { Component } from "react";

class ProductListing extends Component {
    state = {
        productListing: [],
        loading: false,
        error: null,
    };

    componentDidMount() {
        console.log("componentDidMount invoked...");
        this.fetchData();
    }

    fetchData = () => {
        this.setState({
            loading: true,
        });
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    productListing: data,
                    loading: false,
                })
            )
            .catch((error) =>
                this.setState({
                    error: error.message,
                    loading: false,
                })
            );
    };

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
