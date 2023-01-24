import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Info from './components/Info';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //todos veya status değiştiğinde filtreleme ile filteredTodo listesini değiştirir
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed': 
          setFilteredTodos(todos.filter(todo => todo.isCompleted === true))
          break;
        case 'active':
          setFilteredTodos(todos.filter(todo => todo.isCompleted === false))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }
    filterHandler();

  }, [todos, status])

  return (
    <div className="todoapp">
      <Form
      todos={todos}
      setTodos={setTodos}/>

      <TodoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}/>

      <Footer
      todos={todos}
      setTodos={setTodos}
      status={status}
      setStatus={setStatus}/>

      <Info/>
    </div>
  );
}

export default App;
