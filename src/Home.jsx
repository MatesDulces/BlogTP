import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useNavigate } from "react-router-dom";
import Post from "./Post";
import Rutas from "./Rutas";

function Home({ admin, lista, lista2, setLista, setLista2 }) {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");

  const borrarItem = (index) => {
    const newList = [...lista];
    newList.splice(index, 1);
    setLista(newList);
    localStorage.setItem("lista", JSON.stringify(newList));
  };

  const agregarTexto = () => {
    if (nombre.trim() !== "") {
      setLista([...lista, { text: nombre, type: "item" }]);
      localStorage.setItem("lista", JSON.stringify([...lista, { text: nombre, type: "item" }]));
      setNombre(""); // Limpiar el input después de agregar
    }
  };

  return (
    <>
      <nav>
        <ul className="lista">
          <li>
            <Link className="Home" to="/">Volver a la página principal</Link>
          </li>
          <li>
            <Link className="Post" to="/post">Ir a página de Markdown</Link>
          </li>
          {admin && (
            <li>
              <Link className="Admin" to="/admin">Ir a modo Admin</Link>
            </li>
          )}
        </ul>
      </nav>
      <h1>Página Principal</h1>
      <h2>BLOG</h2>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.text}
            {admin && (
              <button onClick={() => borrarItem(index)}>
                BORRAR
              </button>
            )}
          </li>
        ))}
      </ul>

      <h2>Comentarios</h2>
      <ul>
        {lista2.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Agrega un nuevo elemento..."
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={agregarTexto}>
          AGREGAR
        </button>
      </form>
    </>
  );
}

export default Home;
