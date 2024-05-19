import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilters } from "../redux/selectors";


const mapStateToProps = (state) => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilters(state, visibilityFilter)
  return { todos }
}


const TodoList = ({ todos }) => {

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
  
  
}


export default connect(mapStateToProps)(TodoList);

