import React, { Component } from 'react';

export default class MountingPhase extends Component {
    constructor(props) {
        console.log("constructor executing...");
        super(props);
        this.state = {
            count: 10,
            favoritecolor: "green",
        };
    }

    componentDidMount() {
        console.log("componentDidMount executing...");
        document.title = `React count ${this.state.count}`;
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps executing...");
        return { favoritecolor: props.favColor };
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    componentDidUpdate() {
        console.log("componentDidUpdate executing...");
        document.title = `React count ${this.state.count}`;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate executing...", prevProps, prevState);
        return null;
    }

    render() {
        console.log("render executing...");

        return (
            <div>
                <h3>My favorite color is {this.state.favoritecolor} and count is {this.state.count}</h3>
                <button onClick={this.increaseCount}>Click to increase count</button>
            </div>
        );
    }
}
