import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin(props) {
    const navigate = useNavigate();
    const { setAdmin } = props;
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [ver, setVer] = useState("contra");

    function handleSubmit(e) {
        e.preventDefault();
        if (pass === "VTM") {
            setAdmin(true);
            navigate('/');
        } else {
            setAdmin(false);
            setError(true);
        }
    }

    function viewPass(e) {
        e.preventDefault();
        if (ver === "contra") {
            setVer("text");
        } else {
            setVer("contra");
        }
    }

    return (
        <>
            <header>
    
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/">Volver a la página principal</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <div className="div">
                {error && (<h1 className="error">CONTRASEÑA INCORRECTA</h1>)}
                <form className="form">
                    <input className="input" value={pass} type={ver} placeholder="Ingresa la contraseña" onChange={e => setPass(e.target.value)} />
                    <button className="button" onClick={handleSubmit}>Enviar</button>
                    <button className="button" onClick={viewPass}>Ver</button>
                </form>
            </div>
        </>
    );
}

export default Admin;
