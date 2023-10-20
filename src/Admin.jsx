import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin(props) {
  const navigate = useNavigate();
  const { setAdmin } = props;
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (pass === "VTM") {
      setAdmin(true);
      navigate('/');
    } else {
      setError(true);
    }
  }

  return (
    <>
      {props.admin ? (
        <div>
          {/* Contenido de administrador */}
        </div>
      ) : (
        <div>
          {error && (<h1 className="error">CONTRASEÑA INCORRECTA</h1>)}
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              value={pass}
              type="password"
              onChange={e => setPass(e.target.value)}
            />
            <button type="submit" className="button">Ingresar</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Admin;
