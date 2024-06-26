import React, { Component } from 'react'
import ChildComponent from '../unmountaing/child'

export default class ParentComponent extends Component {
    state={
        count:0,
    }
    changeCount=(scale)=>{
        this.setState({
            count:this.state.count+scale,
        })
    }
  render() {
    console.log("parent rendring...")
    return (
        <div>
            <h4>{this.state.count}</h4>
            <h2>hello</h2>
            <button onClick={()=>this.changeCount(4)} >click to change count</button>
            <ChildComponent/>
        </div>
    )
  }
}
