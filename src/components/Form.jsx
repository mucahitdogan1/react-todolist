import React, { useEffect, useState } from 'react'

function Form({todos, setTodos}) {
  const [inputText, setInputText] = useState("");

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    if(inputText === ""){
      alert("Metin Girin")
      return false;
    }

    setTodos([...todos,
      {
        id: todos.length > 0 ? todos[todos.length-1].id + 1 : 0,
        text: inputText,
        isCompleted: false,
      }
    ])

    //console.log(todos); Bu şekilde log'larsak ilk input'u log ekranında göremiyoruz
  }

  useEffect(() => {
    // console.log(todos)
    setInputText("");
  }, [todos])

  return (
    <div>
      <header className='header'>
        <h1>todos</h1>
        <form onSubmit={onSubmitForm}>
          <input
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus 
            value={inputText}
            onChange={onChangeInput}/>
        </form>
      </header>
    </div>
  )
}

export default Form