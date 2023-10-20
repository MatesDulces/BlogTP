import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';

function Comentarios(index) {
    let elim = posts.filter((i) => i.id !== index.id);
    setPosts(elim);
    setComments({ ...comments, [index.id]: [] }); // Borra los comentarios asociados al post
    localStorage.setItem("post", JSON.stringify(elim));
    localStorage.setItem(`comentarios${index.id}`, JSON.stringify([]));
  }

  function handleAddComment(index, commentText) {
    const newComment = { text: commentText, id: Date.now() };
    const updatedComments = [...comments[index.id], newComment];
    setComments({ ...comments, [index.id]: updatedComments });
    localStorage.setItem(`comentarios${index.id}`, JSON.stringify(updatedComments));
  }

  useEffect(() => {
    let postsGuardados = JSON.parse(localStorage.getItem("lista")) || [];
    setPosts(postsGuardados.reverse());

    const commentsData = {};
    postsGuardados.forEach((post) => {
      const postComments = JSON.parse(localStorage.getItem(`comentarios${post.id}`)) || [];
      commentsData[post.id] = postComments;
    });
    setComments(commentsData);
  }, []);

export default Comentarios;

