import React, { Component } from 'react'

export default class childComponent extends Component {
  render() {
    console.log("child rendring...")
    return <div>childComponent</div>
  }
}