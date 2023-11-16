import { useState } from "react";

export default function TodoListItem(props){
    const[counter,setCounter] = useState(0)
    const hii  = () =>{alert("hi");}
    return <div>
        <h1>{props.text}</h1>
        <h2>{props.id}</h2>
        <button onClick={hii}>text</button>

        <button onClick={()=>{setCounter(counter+1)}}>
            {counter}</button>
    </div>

    }