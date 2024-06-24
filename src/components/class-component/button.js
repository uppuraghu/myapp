import React, { Component } from "react";
import { Card } from "react-bootstrap";

class ButtonComponentsClass extends Component{
    state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe:false,
    };
    subscribeHandler=()=>{
        console.log("button clicked")

        // this.state.isSubscribe=!this.state.isSubscribe

        this.setState({
            isSubscribe: !this.state.isSubscribe,
        },
        ()=>{}
    )
        console.log(this.state.isSubscribe,"outside the setstate")
    }


    render(){
        return(
            <React.Fragment>
            <button onClick={this.subscribeHandler}>
            {this.state.isSubscribe ? this.state.text2 : this.state.text1}
            </button>

            {
                this.state.isSubscribe ?(
                    <>
                                    <h2>thanks for subscribing enjoy the premium content: </h2>
                    <Card/>
                    </>
                )
                :(
                    <h2>please subscribe to access the premium content</h2>

                )
            }



            </React.Fragment>
        )
        
    }
}
export default  ButtonComponentsClass;