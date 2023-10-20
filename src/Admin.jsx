import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin(props) {
    const navigate = useNavigate();
    const { setAdmin } = props;
    const [contra, setContra] = useState(""); 
    const [error, setError] = useState(false);
    const [ver, setVer] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (contra === "VTM") {
            setAdmin(true);
            navigate('/');
        } else {
            setAdmin(false);
            setError(true);
        }
    }

    function verContra(e) {
        e.preventDefault();
        setVer(!ver);
    }

    return (
        <>
            <header>
                <nav className="admin">
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
                    <input
                        className="input"
                        value={contra}
                        type={ver ? "text" : "password"} 
                        onChange={e => setContra(e.target.value)} 
                    />
                    <button className="button" onClick={handleSubmit}>Enviar</button>
                    <button className="button" onClick={verContra}>
                        {ver ? "Ocultar" : "Ver"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Admin;
