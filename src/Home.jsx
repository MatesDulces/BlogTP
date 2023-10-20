import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";

function Home() {
  const [posts, setPosts] = useState([]);
  const [admin, setAdmin] = useState(false); 
  
  function HandleClick(index) {
    const postToDelete = posts[index];
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("post", JSON.stringify(updatedPosts));
    localStorage.removeItem(`comentarios${postToDelete.id}`);
  }

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("post")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  return (
    <div className="home">
      {admin && <h1 className='administrador'>Modo Administrador</h1>}
      <h1 className="Twitter">Twitter 2</h1>
      <header>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/Admin">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/post">Publicar tu post</Link>
            </li>
          </ul>
        </nav>
      </header>
      {posts.map((post, index) => (
        <div className="container" key={post.id}>
          <div className="post-item">
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.text}
            </Markdown>
             {admin && <button className="BORRAR" onClick={() => HandleClick(index)}>Borrar</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
