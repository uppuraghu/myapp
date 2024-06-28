import React, { Component } from 'react'

export default class CircleComponent extends Component {
  render() {
    return (
    
      [true,true].map(each=>{
        return(
            <div
            style={{
                border:"2px solid black",
                borderRadius:"50%",
                width:100,
                height:100,
                backgroundColor:each ? "black" : "white",
            }}
          >
          </div>
        )
      })
    )
  }
}
