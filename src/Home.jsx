import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados);
  }, []);

  return (
    <div className="home">
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
