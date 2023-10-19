import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';

function Post() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);

  const agregarTexto = (texto, lista, setLista) => {
    if (texto.trim() !== "") {
      const nuevoItem = { text: texto, type: "item" };
      setLista([...lista, nuevoItem]);

      const updatedLista = [...lista, nuevoItem];
      localStorage.setItem("lista", JSON.stringify(updatedLista));
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Agregar post</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            placeholder="ESCRIBE EN MARKDOWN 😊"
            rows="5"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Markdown remarkPlugins={[remarkGfm]}>{nombre}</Markdown>
          <button onClick={() => agregarTexto(nombre, lista, setLista)}>AGREGAR</button>
        </form>
        <h2>BLOG</h2>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>

      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Comentarios... ❤️"
            type="text"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <button onClick={() => agregarTexto(comentario, lista2, setLista2)}>COMENTAR</button>
        </form>
        <h2>Comentarios</h2>
        <ul>
          {lista2.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
        <nav>
          <ul className="lista">
            <li>
              <Link className="Home" to="/">Volver a la página principal</Link>
            </li>
            <li>
              <Link className="Post" to="/post">Ir a página de Markdown</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Post;   en este tro codigo import React, { useState, useEffect } from "react";
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
      {posts.map((post, index) => (
        {lista2.map((item, index) => (
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
