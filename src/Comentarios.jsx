import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
function Comentarios () {
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

  export default Comentarios;



