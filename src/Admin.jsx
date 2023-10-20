import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [contra, setContra] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (contra === 'VTM') { // Cambia la contraseña aquí
      setAdmin(true);
      navigate('/');
    } else {
      setAdmin(false);
      setError(true);
    }
  }

  function viewPass(e) {
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
      {error && <h1 className="error">CONTRASEÑA INCORRECTA</h1>}
      <form className="form">
        <input
          className="input"
          value={contra}
          type={ver ? 'text' : 'password'}
          onChange={(e) => setContra(e.target.value)}
        />
        <button className="button" onClick={handleSubmit}>
          Enviar
        </button>
        <button className="button" onClick={viewPass}>
          {ver ? 'Ocultar' : 'Ver'}
        </button>
      </form>
    </>
  );
}

export default Admin;
