
import app from "./App.module.css"
import { useState,useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword,setKeyword] = useState("");

  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (event) => {setKeyword(event.target.value)  }

  console.log("i run all the time");
  const iRunOnlyOnce =  () =>{
    console.log("i run only once")
  }
  useEffect(iRunOnlyOnce,[]);
  useEffect(()=>{
    if(keyword !== ""){
      console.log("search for ",keyword)
    }
  },[keyword])
  return (
    <div className="App">
      <input onChange = {onChange} type="text" placeholder="search here..." />
      <header className="App-header">
        <h1 className={app.title}>
          hello
        </h1>
      </header>
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
