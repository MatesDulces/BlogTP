import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";

function Home() {
  const [posts, setPosts] = useState([]);
  const [admin, setAdmin] = useState(false); // Agregado: Variable admin

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados);
  }, []);

  return (
    <div className="home">
      <h1 className = "Twitter">Twitter 2</h1>
      <header>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Volver a la página principal</Link>
            </li>
            <li>
              <Link to="/post">Publicar tu post</Link>
            </li>
          </ul>
        </nav>
      </header>
      {posts.map((post, index) => (
        <div className="container" key={index}>
          <div className="post-item">
             {admin && <button className="delete-button" onClick={() => HandleClick(index)}>Borrar</button>} {/* Modificado: Agregado HandleClick y onClick */}
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.text}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
