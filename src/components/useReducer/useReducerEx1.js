import { useReducer } from "react";
import { initialState, reducer } from "./jsFunctions";

const UseReducerEx1 = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  const addTodoFunction = () => {
    dispatch({
      type: "ADD_TODO",
      newTodo: "wake up at 6am",
    });
  };

  const addTodoFunction1 = () => {
    dispatch({
      type: "ADD_TODO",
      newTodo: "have your meal",
    });
  };

  const addTodoFunction2 = () => {
    dispatch({
      type: "ADD_TODO",
      newTodo: "have your snacks",
    });
  };

  const handleDelete = (todoToDelete) => {
    dispatch({
      type: "DELETE_TODO",
      todoToDelete,
    });
  };

  return (
    <>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
          onClick={addTodoFunction}
        >
          Add Todo
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
          onClick={addTodoFunction1}
        >
          Add Todo
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
          onClick={addTodoFunction2}
        >
          Add Todo
        </button>

        {currentState.todos.map((eachTodo, index) => (
          <h2 key={index}>
            {eachTodo}{" "}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={() => handleDelete(eachTodo)}>delete</button>
          </h2>
        ))}
      </div>
    </>
  );
};

export default UseReducerEx1;
