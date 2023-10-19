import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Post.css';

function Post() {
  const [nombre, setNombre] = useState("");
  const [lista, setLista] = useState([]);
  const [markdownPreview, setMarkdownPreview] = useState("");

  useEffect(() => {
    const storedLista = JSON.parse(localStorage.getItem("lista")) || [];
    setLista(storedLista);
  }, []);

  const agregarTexto = (texto) => {
    if (texto.trim() !== "") {
      const nuevoItem = { text: texto, type: "item" };
      const updatedLista = [...lista, nuevoItem];
      setLista(updatedLista);
      localStorage.setItem("lista", JSON.stringify(updatedLista));
      setNombre(""); // Limpia el campo de texto
      setMarkdownPreview(""); // Limpia la vista previa del Markdown
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Escribe en MARKDOWN, el título y el post :)</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agregarTexto(nombre);
          }}
        >
          <textarea
            placeholder="ESCRIBE EN MARKDOWN 😊"
            rows="5"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setMarkdownPreview(e.target.value);
            }}
          />
          <Markdown remarkPlugins={[remarkGfm]}>{markdownPreview}</Markdown>
          <button type="submit">AGREGAR</button>
        </form>
        <h2>BLOG</h2>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
      <nav>
        <ul className="lista">
          <li>
            <Link className="Home" to="/">
              Volver a la página principal
            </Link>
          </li>
          <li>
            <Link className="Post" to="/post">
              Ir a página de Markdown
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Post;
