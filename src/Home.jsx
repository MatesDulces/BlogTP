import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home(props) {
  const { admin } = props;
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("post"));
    if (postsGuardados) setPosts(postsGuardados); 
  }, []);

  function HandleClick(post) {
    console.log(post.id);
    let updatedPosts = posts.filter((p) => p.id !== post.id); 
    setPosts(updatedPosts); 
    localStorage.setItem("post", JSON.stringify(updatedPosts)); 
    localStorage.setItem(`comentarios${post.id}`, JSON.stringify([]));
  }

  return (
    <div className="home">
      <header>
        <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Volver a la pagina principal</Link>
            </li>
            <li>
              <Link to="/Post">Publicar tu post</Link>
            </li>
            <li>
              <Link to="/Admin">Ir a modo Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
      {admin && <h1 className="admin">Modo Admin Activado👨🏻‍💻</h1>}
      {posts.map((post) => (
        <div className="container">
          <Link to={`/post/${post.id}`} className="post-link">
            <div className="post-item">
              <h1>TITULO: {post.title}</h1>
              <h3>AUTOR: {post.name}</h3>
              <Markdown remarkPlugins={[remarkGfm]}>
                {post.text.substring(0, 30) + "..."}
              </Markdown>
            </div>
          </Link>
          {admin && <button className="delete-button" onClick={() => HandleClick(post)}>borrar</button>}
        </div>
      ))}
    </div>
  );
}

export default Home;
