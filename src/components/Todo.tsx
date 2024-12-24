import { useState } from "react";

interface Todo {
    id: number;
    task:string;
    completed:boolean;
}

const Todo:React.FC = () => {
    const [todos,setTodos] = useState<Todo[]>([]);

    const addTodo=(task : string)=>{
        const newTodo:Todo = {
            id: todos.length+1,
            task,
            completed:false
        }
        setTodos((prevTodos:Todo[])=> [...prevTodos,newTodo]);
    }
  return (
    <div>
      <h1>TODO LIST</h1>
      <button onClick={()=>addTodo('New Todo')}>Add Todo</button>
      {todos.map((todo:Todo)=>(
        <li key={todo.id}>{todo.task} {todo.completed ? "completed" : "pending"}</li>
      ))}
    </div>
  )
}

export default Todo