/* import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";
import Comentarios from "./Comentarios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [admin, setAdmin] = useState(false); 
  
  function HandleClick(index) {
    console.log(index.id);
    let elim = lista.filter((i) => i.id !== index.id);
    setLista(elim);
    localStorage.setItem("post", JSON.stringify(elim));
    localStorage.setItem(`comentarios${index.id}`, JSON.stringify([]));
  }


  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());
  }, []);

  return (
    <div className="home">
      {admin && <h1 classname = 'administrador'>Modo Administrador</h1>}
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
      {posts.map((post, index) => (
        <div className="container" key={index}>
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

export default Home;*/
import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import './Home.css';
import Admin from "./Admin";

function Home() {
  const [posts, setPosts] = useState([]);
  const [admin, setAdmin] = useState(false);

  // Función para eliminar un post
  function deletePost(postId) {
    if (admin) {
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem("lista", JSON.stringify(updatedPosts));
      localStorage.removeItem(`comentarios${postId}`);
    }
  }

  // ...

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
              {admin && (
                <div>
                  <button className="BORRAR" onClick={() => deletePost(post.id)}>
                    Eliminar post
                  </button>
                  <Link to={`/comentar/${post.id}`}>Comentar</Link>
                </div>
              )}
              {!admin && <Link to={`/comentar/${post.id}`}>Comentar</Link>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
