import React, { useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Post({ lista, lista2, setLista, setLista2 }) {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");

  const agregarTexto = (texto, lista, setLista) => {
    if (texto.trim() !== "") {
      const nuevoItem = { text: texto, type: "item" };
      setLista([...lista, nuevoItem]);

      const updatedLista = [...lista, nuevoItem];
      localStorage.setItem("lista", JSON.stringify(updatedLista));
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Agregar post</h1>
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
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>

      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Comentarios... ❤️"
            type="text"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <button onClick={() => agregarTexto(comentario, lista2, setLista2)}>COMENTAR</button>
        </form>
        <h2>Comentarios</h2>
        <ul>
          {lista2.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
        <nav>
          <ul className="lista">
            <li>
              <Link className="Home" to="/">Volver a la página principal</Link>
            </li>
            <li>
              <Link className="Post" to="/post">Ir a la página de Markdown</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Post;
