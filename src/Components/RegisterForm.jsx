import { useState } from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" value={data.name} onChange={handleChange}></input>
                {errors.name && <span>{errors.name}</span>}

                <input type="text" placeholder="email" name="email" value={data.email} onChange={handleChange}></input>
                {errors.email && <span>{errors.email}</span>}

                <input type="text" placeholder="password" name="password" value={data.password} onChange={handleChange}></input>
                {errors.password && <span>{errors.password}</span>}

            </form>
        </div>
    )
}

export{
    RegisterForm
}