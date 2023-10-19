import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin(props) {
    const navigate = useNavigate();
    const { setAdmin } = props;
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false); // Cambio aquí: inicializar como false en lugar de ""
    const [ver, setVer] = useState("password");

    function handleSubmit(e) {
        e.preventDefault();
        if (pass === "react") {
            setAdmin(true);
            navigate('/');
        } else {
            setAdmin(false);
            setError(true); // Cambio aquí: establecer error como true
        }
    }

    function viewPass(e) {
        e.preventDefault();
        if (ver === "password") {
            setVer("text");
        } else {
            setVer("password");
        }
    }

    return (
        <>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/">Volver a la página principal</Link>
                        </li>
                        <li>
                            <Link to="/blog">Publicar tu post</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="ContenedorGeneral">
                {error && (<h1 className="admin-error">Contraseña incorrecta</h1>)}
                <form className="admin-form">
                    <input className="admin-input" value={pass} type={ver} placeholder="Ingresa la contraseña" onChange={e => setPass(e.target.value)} />
                    <button className="admin-button" onClick={viewPass}>Ver contraseña 🔐</button>
                    <button className="admin-button" onClick={handleSubmit}>Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Admin;
