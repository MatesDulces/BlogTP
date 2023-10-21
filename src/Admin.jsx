import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Admin.css';

function Admin(props) {
  const { setAdmin } = props;
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  function HandleSubmit(e) {
    e.preventDefault();
    if (password === "VTM") {
      setAdmin(true); // Establece el estado admin en true
      navigate("/");
    } else {
      setAdmin(false);
      setError(true);
    }
  }

  const Visible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1>Admin Login</h1>
        {error && <p className="error-message">Contraseña incorrecta</p>}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={HandleSubmit}>Ingresar</button>
        <button onClick={Visible}>
          {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
        </button>
      </div>
    </div>
  );
}

export default Admin;

