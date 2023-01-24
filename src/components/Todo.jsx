import React from 'react'

function Todo({todos, setTodos, filteredTodo}) {

  const isCompleted = () => {
    setTodos(todos.map((todo) => (
      todo.id === filteredTodo.id ? {...todo, isCompleted: !todo.isCompleted} : todo
    )))
  }

  const deleteItem = () => {
    setTodos(todos.filter((todo) => todo.id !== filteredTodo.id ))
  }

  return (
    <div>
      <li 
        className={filteredTodo.isCompleted ? "completed" : ""}
        key={filteredTodo.id}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox"
            onClick={isCompleted}/>

          <label>{filteredTodo.text}</label>

          <button 
            className="destroy"
            onClick={deleteItem}></button>
        </div>
      </li>
    </div>
  )
}

export default Todo