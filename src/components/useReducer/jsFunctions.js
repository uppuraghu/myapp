

export const initialState = {
    todos: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.newTodo],
        };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo !== action.todoToDelete),
        };
      default:
        return state;
    }
  };
  