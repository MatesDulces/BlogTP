import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import Home from './Home';

function Post() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);

  useEffect(() => {
    const storedLista = JSON.parse(localStorage.getItem("lista")) || [];
    setLista(storedLista);
  }, []);

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  useEffect(() => {
    const storedLista2 = JSON.parse(localStorage.getItem("lista2")) || [];
    setLista2(storedLista2);
  }, []);

  useEffect(() => {
    localStorage.setItem("lista2", JSON.stringify(lista2));
  }, [lista2]);


  return (
    <div className="container">
      <div>
        <h1>Agregar post</h1>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                placeholder="ESCRIBE EN MARKDOWN 😊"
                rows="5"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Markdown remarkPlugins={[remarkGfm]}>{nombre}</Markdown>

              <button onClick={agregarNombre}>AGREGAR</button>
            </form>
          </div>
        )}
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
      </div>
    </div>
  );
}

export default Post;
