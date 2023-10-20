import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
function Comentarios (index) {
const handleComment = (index) => (event) => {
    event.preventDefault();
    const newComment = event.target.comment.value;
    if (newComment.trim() !== "") {
      const updatedPosts = posts.map((post) => {
        if (post.id === index.id) {
          return {
            ...post,
            comments: [...(post.comments || []), newComment],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      localStorage.setItem("lista", JSON.stringify(updatedPosts));
      event.target.comment.value = "";
    }
  };
return (
    <div>
      {index.comments && (
        <ul>
          {index.comments.map((comment, commentIndex) => (
            <li key={commentIndex} className="comment">
              {comment}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleComment(index)}>
        <input
          type="text"
          name="comment"
          placeholder="Añadir un comentario..."
        />
        <button type="submit">Comentar</button>
      </form>
    </div>
  );
}
export default Comentarios;



