import React, { Component } from "react";
import { Heading1 } from "../../headings/headings";
import ButtonComponentsClass from "../button";

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["wake up at 6:00am"],
    };
  }
  todoHandler=()=>{
    this.setState({
        todos:[...this.state.todos,"attend online class at 10:am"],
    })
  }
  render() {
    return (
      <>
        <Heading1 title="list of todos" />
        <ol>
            {this.state.todos.map((eachTodo)=>{
                return<li>{eachTodo}</li>
            }
        )}
        </ol>
        <ButtonComponentsClass text={"Add todo"}  onPress={this.todoHandler}/>
        {this.state.todos.map((eachTodo, index) => (
          <h2 key={index}>{eachTodo}</h2>
        ))}
      </>
    );
  }
}

export default TodoComponent;
