import { useState } from "react";
import { SendBtn } from "../Components/Atoms/SendBtn";

function RegisterForm() {
    const [data, setData] = useState({ name: "", email: "", password: ""})

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        const { name, value } = e.target
        
        setData((prev) => ({ ... prev, [name]: value}))
    }

    
    function validate(data){
        const errors = {}
        
        if (!data.name.trim()) errors.name = "Nombre obligatorio"
        
        if(!data.email.includes("@")) errors.email = "Formato inválido de correo";
        
        if(data.password.length < 6) errors.password = "Contraseña muy corta"
        
        return errors
        
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const foundedErrors = validate(data)
        setErrors(foundedErrors)

        if(foundedErrors.length > 0) return;

    }

    return(
        <div className="flex-col gap-1 ">
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 p-6">
                
                <h2 className="text-2xl font-bold">Nombre:</h2>
                <input type="text" placeholder="Name" name="name" value={data.name} onChange={handleChange} className="rounded-full border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"/>
                {errors.name && <span>{errors.name}</span>}

                <h2 className="text-2xl font-bold">Correo:</h2>
                <input type="text" placeholder="Email" name="email" value={data.email} onChange={handleChange} className="rounded-full border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"/>
                {errors.email && <span>{errors.email}</span>}

                <h2 className="text-2xl font-bold">Contraseña:</h2>
                <input type="text" placeholder="Password" name="password" value={data.password} onChange={handleChange} className="rounded-full border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"/>
                {errors.password && <span>{errors.password}</span>}
                
                <SendBtn />
            </form>
        </div>
    )
}

export{
    RegisterForm
}