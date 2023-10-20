import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";

function Home(props) {
  const [posts, setPosts] = useState([]);
  const {admin} = props;
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState ([]);
  const [titulo, setTitulo] = useState ([]);;

  function HandleClick(post) {
    let elim = lista.filter((i) => i.id !== post.id);
    setLista(elim);
    localStorage.setItem("lista", JSON.stringify(elim));
    localStorage.removeItem(`comentarios${post.id}`);
  }

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  useEffect(() => {
    let tituloGuardado = JSON.parse(localStorage.getItem("lista2")) || [];
    setLista2(tituloGuardado.reverse());
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
      {lista.map((item, index1) => (
        <div className="container" key={index1}>
          <div className="lista2-item">
            <h2>{item.title}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>
              {item.text}
            </Markdown>
          </div>
           {admin && <button className="delete-button" onClick={() => HandleClick(item)}>Borrar</button>}
        </div>
      ))}
      {posts.map((post, index) => (
        <div className="container" key={index}>
          <div className="post-item">
            <h2>{post.title}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.text}
            </Markdown>
            <div>
              <Link to={`/comentar/${post.id}`}>Comentar</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
