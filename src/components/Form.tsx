import { FormEvent, useRef, useState } from "react"

interface formData {
    name: string,
    email: string,
    password: string,
}

const Form = () => {

    const [submittedData,setSubmittedData] =useState<formData>({
        name: "",
        email: "",
        password: "",
    });

    const name=useRef<HTMLInputElement> (null)
    const email=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const nameValue=name.current!.value;
        const emailValue=email.current!.value;
        const passValue=password.current!.value;

        setSubmittedData({
            name:nameValue,
            email:emailValue,
            password:passValue,
        })

        console.log(nameValue);
        console.log(emailValue);
        console.log(passValue);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Enter your name" ref={name} />
            <input type="email" placeholder="Enter your email" ref={email} />
            <input type="password" placeholder="Enter your password" ref={password} />
            <button type="submit">Submit</button>

            <section>
                <h1>Name: {submittedData.name}</h1>
                <h1>Email: {submittedData.email}</h1>
                <h1>Password: {submittedData.password}</h1>
            </section>
        </form>
    </div>
  )
}

export default Form