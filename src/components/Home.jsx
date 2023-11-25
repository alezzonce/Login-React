export function Home({user, setUser}) {

    const handleLogout = () => {
        setUser([])
    }
    return (
        <div>
        <h1>¡Bienvenid@!</h1>
        <h2>{user}</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
    }