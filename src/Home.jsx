import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import './Home.css';

function Home(props) {
  const [publicaciones, setPublicaciones] = useState([]);
  const { admin } = props;
  const [comentarios, setComentarios] = useState([]);
  const [titulos, setTitulos] = useState([]);

  function ManejarBorrado(publicacion) {
    const filtradas = comentarios.filter((comentario) => comentario.id !== publicacion.id);
    setComentarios(filtradas);
    localStorage.setItem("comentarios", JSON.stringify(filtradas));
    localStorage.removeItem(`comentarios${publicacion.id}`);
  }

  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem("publicaciones")) || [];
    setPublicaciones(publicacionesGuardadas.reverse());
  }, []);

  useEffect(() => {
    const titulosGuardados = JSON.parse(localStorage.getItem("titulos")) || [];
    setTitulos(titulosGuardados.reverse());
  }, []);

  const eliminarPublicacion = (idPublicacion) => {
    const publicacionesActualizadas = publicaciones.filter(publicacion => publicacion.id !== idPublicacion);
    setPublicaciones(publicacionesActualizadas);
    localStorage.setItem("publicaciones", JSON.stringify(publicacionesActualizadas));
  };

  return (
    <div className="home">
      <h1 className="Twitter">Twitter 2</h1>
      <header>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/post">Publicar tu publicación</Link>
            </li>
          </ul>
        </nav>
      </header>
      {admin && <h1 className='administrador'>Modo Administrador</h1>}
      {comentarios.map((comentario, index1) => (
        <div className="container" key={index1}>
          <div className="comentario-item">
            <h2>{comentario.title}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>
              {comentario.text}
            </Markdown>
            {admin && <button className="boton-borrar" onClick={() => ManejarBorrado(comentario)}>Borrar</button>}
          </div>
        </div>
      ))}
      {publicaciones.map((publicacion, index) => (
        <div className="container" key={index}>
          <div className="publicacion-item">
            <h2>{publicacion.title}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>
              {publicacion.text}
            </Markdown>
            <div>
              <Link to={`/comentar/${publicacion.id}`}>Comentar</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
