import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';

function Comentarios() {
  const { postId } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Cargar los comentarios previos desde el almacenamiento local al montar el componente.
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comentarios${postId}`)) || [];
    setComments(storedComments);
  }, [postId]);

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      // Agregar el nuevo comentario con el título "Usuario" al estado.
      const newComment = `Usuario: ${comment}`;
      setComments([...comments, newComment]);

      // Guardar los comentarios actualizados en el almacenamiento local.
      localStorage.setItem(`comentarios${postId}`, JSON.stringify([...comments, newComment]));

      setComment('');
    }
  };

  return (
    <div>
      <h1>Comentarios del Post {postId}</h1>
      <div className="comment">
        <textarea
          placeholder="Añadir un comentario..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Agregar Comentario</button>
      </div>
      {comments.length > 0 && (
        <div className="comments-header">
          <h2>Comentarios anteriores:</h2>
        </div>
      )}
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <Markdown remarkPlugins={[remarkGfm]}>{comment}</Markdown>
        </div>
      ))}
    </div>
  );
}

export default Comentarios;





