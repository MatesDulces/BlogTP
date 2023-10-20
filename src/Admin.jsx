import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminContext } from "./AdminContext";

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
/*import { useAdminContext } from "./AdminContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Admin() {
  const { admin, setAdmin } = useAdminContext();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    if (password === "VTM") {
      setAdmin(true);
      navigate("/");
    } else {
      setAdmin(false);
      setError(true);
    }
  }

  return (
    <div>
      <h1>Admin Login</h1>
      {error && <p>Contraseña incorrecta</p>}
      <form onSubmit={HandleSubmit}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Admin;*/
