import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import './HomeAdmin.css';
import Admin from "./Admin";

function Home() {
  const [posts, setPosts] = useState([]); 
  const [admin, setAdmin] = useState();
  
  function HandleClick(post) {
    console.log(post.id);
    let elim = lista.filter((i) => i.id !== post.id);
    setLista(elim);
    localStorage.setItem("post", JSON.stringify(elim));
    localStorage.setItem(`comentarios${post.id}`, JSON.stringify([]));
  }

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  // Función para eliminar un post
  const deletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
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
      {posts.map((post, index) => (
        <div className="container" key={index}>
          <div className="post-item">
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.text}
            </Markdown>
              <div>
                {admin && ( <button className="BORRAR" onClick={() => deletePost(post.id)}>Borrar</button> )}
                <Link to={`/comentar/${post.id}`}>Comentar</Link>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeAdmin;
