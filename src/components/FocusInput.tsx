import { useRef } from "react";

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick=()=>{
        inputRef.current?.focus();
    };
  return (
    <div>
        <h1>FocusInput</h1>
        <input
         type="text"
         placeholder="click the button to focus on me"
         ref={inputRef}
         />
        <button onClick={handleClick}>FocusInput</button>
    </div>
  )
}

export default FocusInput