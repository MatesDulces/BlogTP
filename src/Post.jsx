import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Principal";
import Comentarios from "./components/Comentarios";
import Admin from "./components/Admin";

function Post() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.local(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postTitle.trim() !== '' && postContent.trim() !== '') {
      const newPost = { title: postTitle, content: postContent };
      setPosts([...posts, newPost]);
      setPostTitle('');
      setPostContent('');
    }
  };

  return (
    <div>
      <h2>Agregar una nueva publicación</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <h2>Publicaciones</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.title}:</strong> {post.content}
          </li>
        ))}
      </ul>
      <nav>
        <ul>
        <li><Link to="/">Volver a la pagina principal</Link></li>
        <li><Link to="/blog">Ir a pagina de Markdown</Link></li>
        <li><Link to="/Admin">Ir a modo Admin</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Post;
