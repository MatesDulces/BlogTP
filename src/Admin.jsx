import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === "VTM") {
      // Establece el estado de administrador a true
      localStorage.setItem("admin", "true");
      navigate("/");
    } else {
      setError(true);
    }
  };

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
        <button onClick={handleLogin}>Ingresar</button>
        <button onClick={togglePasswordVisibility}>
          {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
        </button>
        <Link to="/">Volver a la página principal</Link>
      </div>
    </div>
  );
}

export default Admin;
