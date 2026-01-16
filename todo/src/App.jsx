
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
    setInput('');
  }


  function deleteHandler(id){
    const p=todo.filter((x)=>x.id!==id);
    setTodo(p);
  }

  function doneHandler(id){
    const p=todo.map((x)=>(
      x.id===id ? {...x,isComplete:!x.isComplete} : x
    ))
    setTodo(p);
    
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
            <li key={index} className={data.isComplete?'classComplete':''}>
              <span onClick={()=>doneHandler(data.id)}>{data.content}</span>
              <button onClick={()=>deleteHandler(data.id)}>delete</button>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}

export default App
