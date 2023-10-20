import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Admin(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setAdmin } = props; // Obtén la función setAdmin de las props

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

  const togglePasswordVisibility = () => {
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
        <button onClick={togglePasswordVisibility}>
          {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
        </button>
      </div>
    </div>
  );
}

export default Admin;
