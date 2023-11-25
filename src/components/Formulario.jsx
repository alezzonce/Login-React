import "./Formulario.css";
import { useState } from "react";


export function Formulario({setUser}) {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [Error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (usuario === "" || contraseña ==="" ) {
            setError(true)
            return
        }

        setError(false)

        setUser([usuario])
    }


    return (
        <section>
            <h2>Login</h2>

            <form className="Formulario" onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" value={usuario} onChange={e =>setUsuario(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={contraseña} onChange={e =>setContraseña(e.target.value)}/>
                <button type="submit">Ingresar</button>
            </form>
            {Error && <p>*Todos los campos son obligatorios*</p>}
        </section>
)
}