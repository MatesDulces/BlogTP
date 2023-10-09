import React, { useState } from "react";
import "./App.css";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';


function Lista() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [mostrarFormPost, setMostrarFormPost] = useState(false); 
  const [mostrarFormComentario, setMostrarFormComentario] = useState(false); 

  const agregarNombre = () => {
    if (nombre.trim() !== "") {
      setLista([...lista, { text: nombre, type: "item" }]);
      setNombre("");
    }
  };

  const agregarComentario = () => {
    if (comentario.trim() !== "") {
      setLista2([...lista2, { text: comentario, type: "corazón" }]);
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
        )}
        <h2>BLOG</h2>
        <ListaCompleta lista={lista} />
      </div>

      <div>
        const ListaCompleta = ({ lista }) => {
  return (
    <ul>
      {lista.map((item, i) => (
        <li key={i}>{item.text}</li>
      ))}
      <Link to="/markdown">Hacer blog</Link>
    </ul>
  );
};