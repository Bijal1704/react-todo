import React, { useEffect, useState } from "react";

function TodoItem (props) {  
  const  [complete, setComplete] = useState(props.todo.complete);

  const _onCompleteCheck = (event) => {
    props.todos[props.index].complete = event.target.checked;
    localStorage.setItem("todos",JSON.stringify(props.todos));
    setComplete(event.target.checked);    
  }

  const _onDeleteClick = () => {    
    props.todos.splice(props.index, 1);
    localStorage.setItem("todos",JSON.stringify(props.todos));
    document.getElementById("task-"+props.index).remove();
  }

  const _renderCheckbox = () => {
    return (
      <div className="col-2 todo-item__checkbox">
        <input
          type="checkbox"
          className="form-control"
          onChange={_onCompleteCheck}
          checked={complete ? 'checked' : null}
        />
      </div>        
    );
  }

  const _renderTitle = () => {
    return (
      <div className="col-8 todo-item__title">
        <h3>{props.todo.title}</h3>
      </div>
    );
  }

  const _renderDelete = () => {
    return (     
      <div className="col-2 todo-item__title">
        <button className="btn btn-danger" type="button" onClick={()=> props.handleDelete(props.index)}>
          <span className="" style={{ fontSize: "24px", lineHeight: "16px"}}>
            x
          </span>
        </button>
      </div> 
    );
  }

  return (
    <li key={props.index} id={`task-${props.index}`} className="list-group-item todo-item">
      <div className="row">
        {_renderCheckbox()}
        {_renderTitle()}
        {_renderDelete()}
      </div>
    </li>
  );
}

export default TodoItem;
