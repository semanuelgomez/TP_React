import { useState } from "react"
import { useForm } from "../../hooks/useForm"

export const FormComponent = () => {
const {values, handleChange, resetForm} = useForm({
    email: "",
    nombre: "",
    edad: 0
})

const {email, nombre, edad} = values

const handleSubmitForm = () => {
    console.log(values)
}

const handleResetForm = () => {
    resetForm()
}


    return (
        <div>
            <div>
                <h2>Form</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
                <input value={email} name="email" onChange={handleChange} placeholder="Email" type="email" />
                <input value={nombre} name="nombre" onChange={handleChange} placeholder="Nombre" type="text" />
                <input value={edad} name="edad" onChange={handleChange} placeholder="Edad" type="number" />
            </div>

            <div>
                <button onClick={handleSubmitForm}>Enviar</button>
                <button onClick={handleResetForm}>Reset</button>
            </div>

        </div>
    )
}   