import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";

function Home() {
  const [posts, setPosts] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [titulo, setTitulo] = useState("");

  function HandleClick(tituloId) {
    let elim = lista.filter((item) => item.id !== tituloId);
    setLista(elim);
    localStorage.setItem("lista", JSON.stringify(elim));
    localStorage.removeItem(`comentarios${tituloId}`);
  }

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  useEffect(() => {
    let titulosGuardados = JSON.parse(localStorage.getItem("lista2")) || [];
    setTitulo(titulosGuardados.reverse());
  }, []);

  const deletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("lista", JSON.stringify(updatedPosts));
  };

  return (
    <div className="home">
      {admin && <h1 className='administrador'>Modo Administrador</h1>}
      <h1 className="Twitter">Twitter 2</h1>
      <header>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/post">Publicar tu post</Link>
            </li>
          </ul>
        </nav>
      </header>
      {titulo.map((tituloItem, index1) => (
        <div className="container" key={index1}>
          <div className="titulo-item">
            <Markdown remarkPlugins={[remarkGfm]}>
              {tituloItem}
            </Markdown>
            <button className="BORRAR" onClick={() => HandleClick(tituloItem.id)}>Borrar</button>
          </div>
        </div>
      ))}
      {posts.map((post, index) => (
        <div className="container" key={index}>
          <div className="post-item">
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.text}
            </Markdown>
            <div>
              {admin && (<button className="BORRAR" onClick={() => deletePost(post.id)}>Borrar</button>)}
              <Link to={`/comentar/${post.id}`}>Comentar</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
