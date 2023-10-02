import React, { useState } from "react";
import "./App.css";

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
          Agregar Post
        </button>
        {mostrarFormPost && (
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                placeholder="¿Cómo fue tu día hoy? 😊"
                rows="5"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <button onClick={agregarNombre}>AGREGAR</button>
            </form>
          </div>
        )}
        <h2>Estado de ánimo</h2>
        <ListaCompleta lista={lista} />
      </div>

      <div>
        <button onClick={() => setMostrarFormComentario(!mostrarFormComentario)}>
          Agregar Comentario
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
        <ListaCompleta2 lista2={lista2} />
      </div>
    </div>
  );
}

const ListaCompleta = ({ lista }) => {
  return (
    <ul>
      {lista.map((item, i) => (
        <li key={i}>{item.text}</li>
      ))}
    </ul>
  );
};

const ListaCompleta2 = ({ lista2 }) => {
  return (
    <ul>
      {lista2.map((item, o) => (
        <li key={o}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Lista;
