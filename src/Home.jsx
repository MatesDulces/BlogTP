import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import './Home.css';

function Home(props) {
  const [posts, setPosts] = useState([]);
  const { admin } = props;
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [titulo, setTitulo] = useState([]);

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  useEffect(() => {
    let tituloGuardado = JSON.parse(localStorage.getItem("lista2")) || [];
    setLista2(tituloGuardado.reverse());
  }, []);

const eliminarPost = (postId) => {
    if (admin) {
      // Solo permite la eliminación si es un administrador
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);

      // Actualiza el almacenamiento local
      localStorage.setItem("lista", JSON.stringify(updatedPosts));
    }
  };
  
  return (
    <div className="home">
      <header>
        <h1 className="Twitter">Twitter 2</h1>
        <nav className="nav-menu">
          {admin && <h1 className='administrador'>Modo Administrador</h1>}
          <ul>
            <li>
              <Link to="/post">Publicar tu post</Link>
            </li>
          </ul>
        </nav>
      </header>
      {lista.map((item, index1) => (
        <div className="container" key={index1}>
          <div className="lista2-item">
            <h2>Autor: {item.title}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>
              {item.text}
            </Markdown>
          </div>
          {admin && (
            <button
              className="delete-button"
              onClick={() => eliminarPost(item.id)}
            >
              Borrar
            </button>
          )}
        </div>
      ))}
      {posts.map((post, index) => (
        <div className="container" key={index}>
          <div className="post-item">
            <h2>Autor: {post.title}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.text}
            </Markdown>
            <div className="boton-comentar">
              <Link to={`/comentar/${post.id}`}>Comentar</Link>
               {admin && (
                <button
                  className="delete-button"
                  onClick={() => eliminarPost(post.id)}
                >
                  Borrar
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
