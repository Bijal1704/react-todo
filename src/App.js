import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App () {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));  

  const _onChangeTitle = (event) => {    
    setTitle(event.target.value)
  }

  const _onEnterPressAdd = (event) => {
    if (13 === event.keyCode) {
      _onClickAdd();
    }
  }

  const handleDelete = (index) => {    
    if (window.confirm("Are you sure you want to Delete?") == true) {
      const newTasks = [...todos]
      newTasks.splice(index, 1)
      setTodos(newTasks)
      let myTask = todos.push(newTasks)
      window.localStorage.setItem("todos",JSON.stringify(newTasks))    
    }    
  }


  const _onClickAdd = () => {
    if(!title){
      alert('Please enter task details');
    }else{
      if(todos){
        todos.push({
          title: title,
          complete: false,
        });
      }else{
        setTodos([{
          title: title,
          complete: false,
        }])
      }      
      localStorage.setItem("todos",JSON.stringify(todos));
      setTitle('')
    }
  }

  const _renderHeader = () => {

    return (
      <div className="todos-app-header card-header">
        <h2>ToDo</h2>
        <div className="input-group">
          <input
            type="text"
            name="title"
            placeholder="What do you need to do?"
            className="form-control add-new-todo"
            onChange={_onChangeTitle}
            onKeyDown={_onEnterPressAdd}
            value={title}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              onClick={_onClickAdd}
            >
              <span
                className=""
                style={{
                  fontSize: "24px",
                  lineHeight: "16px",
                }}
              >
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3 mt-2">
          <div className="todos-app card">
            {_renderHeader()}
            <div className="card-body">                
              <TodoList
                todos={todos}
                //setTodos={setTodos}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
