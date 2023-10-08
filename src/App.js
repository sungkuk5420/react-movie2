import { useState } from "react";

function App() {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const onChange = (event) => {setTodo(event.target.value);
    console.log(todo)
  }
  const onSubmit = (event)=>{event.preventDefault();
    if(todo === ""){
      return;
    }
    console.log(todo)
    setTodos(currentArray => [todo,...currentArray])
    setTodo('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={todo} placeholder="write your to do" />
        <button>Add To Do</button>
      </form>
      <ul>
        {todos.map((item,index)=>{          
          return <li key={index} >{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
