import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Post.css';

function Post() {
  const [titulo, setTitulo] = useState("");  
  const [texto, setTexto] = useState("");
  const [publicaciones, setPublicaciones] = useState([]);
  const [titulos, setTitulos] = useState([]);  
  const [vistaPreviaMarkdown, setVistaPreviaMarkdown] = useState("");
  const [ultimoId, setUltimoId] = useState(0); 

  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem("publicaciones")) || [];
    setPublicaciones(publicacionesGuardadas);

    const maxId = publicacionesGuardadas.reduce((max, publicacion) => (publicacion.id > max ? publicacion.id : max), 0);
    setUltimoId(maxId);
  }, []);

  useEffect(() => {
    const titulosGuardados = JSON.parse(localStorage.getItem("titulos")) || [];
    setTitulos(titulosGuardados);
  }, []);

  const agregarPublicacion = (titulo, texto) => { 
    if (titulo.trim() !== "" && texto.trim() !== "") {
      const nuevaPublicacion = { 
        id: ultimoId + 1, 
        title: titulo, 
        text: texto, 
        type: "item" 
      };

      const publicacionesActualizadas = [...publicaciones, nuevaPublicacion];
      setPublicaciones(publicacionesActualizadas);
      setUltimoId(ultimoId + 1); 
      localStorage.setItem("publicaciones", JSON.stringify(publicacionesActualizadas);
      
      const titulosActualizados = [...titulos, titulo];
      setTitulos(titulosActualizados);
      localStorage.setItem("titulos", JSON.stringify(titulosActualizados));

      setTitulo("");  
      setTexto("");
      setVistaPreviaMarkdown("");
    }
  };

  return (
    <div className="container">
      <div> 
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agregarPublicacion(titulo, texto);  
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
            value={texto}
            onChange={(e) => {
              setTexto(e.target.value);
              setVistaPreviaMarkdown(e.target.value);
            }}
          />
          <Markdown remarkPlugins={[remarkGfm]}>{vistaPreviaMarkdown}</Markdown>
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
        </ul>
      </nav>
    </div>
  );
}

export default Post;
