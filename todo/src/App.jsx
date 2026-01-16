
import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput]=useState('');
  const [todo,setTodo]=useState([]);

  function changeHandler(e){
    setInput(e.target.value);
  }

  function clickHandler(e){
    e.preventDefault();
    const newTodo={
      id:Date.now(),
      content:input,
      isComplete:false
    }
    setTodo([
      ...todo,
      newTodo
    ])
  }

  return (
    <div>
      <div>
        <input type='text' placeholder='add todo' value={input} onChange={changeHandler}/>
        <button onClick={clickHandler}>add</button>
      </div>
      <ul>
        {
          todo.map((data,index)=>(
            <li key={index}>
              {data.content}
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}

export default App
