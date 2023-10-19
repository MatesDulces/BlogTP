import React, { useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import Home from './Home';


function Lista() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [mostrarFormPost, setMostrarFormPost] = useState(false); 
  const [mostrarFormComentario, setMostrarFormComentario] = useState(false); 

  const agregarNombre = () => {
    if (nombre.trim() !== "") {
      setCom([...Com, { text: nombre, type: "item" }]);
      setNombre("");
    }
  };

  const agregarComentario = () => {
    if (comentario.trim() !== "") {
      setCom2([...Com2, { text: comentario, type: "corazón" }]);
      setComentario("");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Agregar post</h1>
        <button onClick={() => setMostrarFormPost(!mostrarFormPost)}>
          
        </button>
        {mostrarFormPost && (
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                placeholder="ESCRIBE EN MARKDOWN 😊"
                rows="5"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}/>
              <Markdown remarkPlugins={[remarkGfm]}>{nombre}</Markdown>

              <button onClick={agregarNombre}>AGREGAR</button>
            </form>
          </div>
        <h2>BLOG</h2>
        <ListaCompleta lista={lista} />
      </div>
   )}
      <div>
        <button onClick={() => setMostrarFormComentario(!mostrarFormComentario)}>
        </button>
        {mostrarFormComentario && (
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Comentarios... ❤️"
                type="text"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />
              <button onClick={agregarComentario}>COMENTAR</button>
            </form>
          </div>
        )}
        <h2>Comentarios</h2>
        <ListaCompleta2 Com2={lista2} />
      </div>
    </div>
  );
};

export default Lista;
