import React from 'react'
import Todo from './Todo.jsx'

function TodoList({todos, setTodos, filteredTodos}) {

  return (
    <div>
      <section className='main'>
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete?</label>

        <ul className='todo-list'>
          {filteredTodos.map((filteredTodo) => (
            <Todo
            todos={todos}
            setTodos={setTodos}
            filteredTodo={filteredTodo}/>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default TodoList