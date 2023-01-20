import React from "react";
import TodoItem from "./TodoItem";

function TodoList (props) {  

  const _renderTodos = () => {
    if(props.todos){
      return props.todos.length > 0 && (
        props.todos.map((row, key) => (
          <TodoItem
            todo={row}
            index={key}
            todos={props.todos}
            handleDelete={props.handleDelete} />
        ))
      )
    }
  }

  return (      
    <ul className="list-group todo-list">      
      {_renderTodos()}
    </ul>      
  );
}

export default TodoList;
