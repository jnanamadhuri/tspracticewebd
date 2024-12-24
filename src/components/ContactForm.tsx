import { useState } from "react"

interface contactFormData{
    name:string,
    email:string,
}

const ContactForm = () => {

    const [formData,setFormData] = useState<contactFormData>({
        name: "",
        email: "",
    })

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}= e.target;
        setFormData((prevData)=>({...prevData,[name]:value}))
    }

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
         console.log("Form submitted:", formData);
        // Handle form submission (e.g., send data to an API)
    }

  return (
    <div>
        <center>
            <h1>CONTACT FORM</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                       />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </center>
    </div>
  )
}

export default ContactForm