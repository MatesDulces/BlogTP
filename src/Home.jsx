import React from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import "Home.css";
function Home({ lista, lista2 }) {
  return (
    <div className="home">
      <header>
        <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
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
      <div className="container">
        <h2>Comentarios</h2>
        <ul>
          {lista2.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
          {lista.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
