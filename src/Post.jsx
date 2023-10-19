import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Post.css';

function Post() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTexto = (texto, lista, setLista) => {
    if (texto.trim() !== "") {
      const nuevoItem = { text: texto, type: "item" };

      setLista([...lista, nuevoItem]);

      const updatedLista = [...lista, nuevoItem];
      localStorage.setItem("lista", JSON.stringify(updatedLista));
      setNombre("");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Escribe en MARKDOWN, el título y el post :)</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            placeholder="ESCRIBE EN MARKDOWN 😊"
            rows="5"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Markdown remarkPlugins={[remarkGfm]}>{nombre}</Markdown>
          <button onClick={() => agregarTexto(nombre, lista, setLista)}>AGREGAR</button>
        </form>
        <h2>BLOG</h2>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              <Markdown remarkPlugins={[remarkGfm]}>{item.text}</Markdown>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <ul className="lista">
          <li>
            <Link className="Home" to="/">Volver a la página principal</Link>
          </li>
          <li>
            <Link className="Post" to="/post">Ir a página de Markdown</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Post;
