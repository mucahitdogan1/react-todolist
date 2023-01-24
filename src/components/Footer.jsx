import React from 'react'

function Footer({todos, setTodos, status, setStatus}) {

  const uncompleted = todos.filter(todo => todo.isCompleted === false)

  const clearCompleted = (event) => {
    event.preventDefault();
    setTodos(todos.filter(todo => todo.isCompleted === false))
  }

  const selectedButton = (event) => {
    setStatus(event.target.id)
  }

  return (
    <div>
      <footer className='footer'>
        <span className='todo-count'>
          <strong>{uncompleted.length}</strong>
          {todos.length > 1 ? " items left" : " item left"}
        </span>

        <ul className='filters'>
          <li>
            <a
            className={status === "all" ? "selected" : ""} 
            id="all" 
            onClick={selectedButton}>All</a>
          </li>

          <li>
            <a
            className={status === "active" ? "selected" : ""}
            id="active"
            onClick={selectedButton}>Active</a>
          </li>

          <li>
            <a
            className={status === "completed" ? "selected" : ""} 
            id="completed" 
            onClick={selectedButton}>Completed</a>
          </li>
        </ul>

        <button 
          className='clear-completed'
          onClick={clearCompleted}
        >Clear Completed</button>
      </footer>
    </div>
  )
}

export default Footer