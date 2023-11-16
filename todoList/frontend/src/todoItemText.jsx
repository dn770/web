import { useState } from "react";

export default function TodoListItemText(props){
    const[text,setText] = useState("hello")
    const[todos,setTodos] = useState([])

    const handleChange = (event)=>{
        const newText = event.target.value;
        setText(newText);
    }

    const handleClick = () => {
        if (text.trim() !== "") {
          setTodos([...todos, text]);
          setText(""); 
        }
      };

    return <div>
        <h1> wellcome to my todo list</h1>
        <input type="text" defaultValue="hello" onChange={handleChange}></input>
        <button onClick={handleClick}>
            Add</button> 
            <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
    
    }

