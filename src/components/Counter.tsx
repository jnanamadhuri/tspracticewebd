import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState<number>(0);
  return (
    <div>
        <h1>Counter</h1>
        <h2>Count :{count}</h2>
        <button onClick={()=>setCount(count+5)}>Increment</button>
        <button onClick={()=>setCount(count-5)}>Decrement</button>
        <button onClick={()=>setCount(0)}>ReSet</button>
    </div>
  )
}

export default Counter