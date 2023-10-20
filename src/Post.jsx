import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Post.css';

function Post() {
  const [titulo, setTitulo] = useState("");  
  const [nombre, setNombre] = useState("");
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);  
  const [markdownPreview, setMarkdownPreview] = useState("");

  useEffect(() => {
    const storedLista = JSON.parse(localStorage.getItem("lista")) || [];
    setLista(storedLista);
  }, []);

  const agregarTexto = (titulo, texto) => { 
    if (titulo.trim() !== "" && texto.trim() !== "") {
      const nuevoItem = { title: titulo, text: texto, type: "item" };
      const updatedLista = [...lista, nuevoItem];
      setLista(updatedLista);
      localStorage.setItem("lista", JSON.stringify(updatedLista));


      const updatedLista2 = [...lista2, titulo];
      setLista2(updatedLista2);
      setTitulo("");  
      setNombre("");
      setMarkdownPreview("");
    }
  };

  return (
    <div className="container">
      <div> 
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agregarTexto(titulo, nombre);  
          }}
        >
          <input
            type="text"
            placeholder="TÍTULO"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
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
