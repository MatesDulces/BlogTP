import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";

function Home() {
  const [posts, setPosts] = useState([]);
  const { admin, setAdmin } = props;
  
  function HandleClick(index) {
    console.log(index.id);
    let elim = lista.filter((i) => i.id !== index.id);
    setPosts(elim);
    localStorage.setItem("post", JSON.stringify(elim));
    localStorage.setItem(`comentarios${index.id}`, JSON.stringify([]));
  }

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  return (
    <div className="home">
      {Admin && (<h1 classname = 'administrador'>Modo Administrador</h1>)}
      <h1 className = "Twitter">Twitter 2</h1>
      <header>
        <nav className="nav-menu">
          <ul>  
            <li>
              <Link to="/post">Publicar tu post</Link>
            </li>
          </ul>
        </nav>
      </header>
      {posts.map((index) => (
        <div className="container">
          <div className="post-item">
            <Markdown remarkPlugins={[remarkGfm]}>
              {index.text.substring(0, 30) + "..."}
            </Markdown>
          </div>
         {admin && <button className="BORRAR" onClick={() => HandleClick(index)}>Borrar</button>}
        </div>
      ))}
    </div>
  );
}

export default Home;
