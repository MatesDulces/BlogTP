import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';

function Comentarios() {
  const { postId } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <h1>Comentarios del Post</h1>
      <Markdown remarkPlugins={[remarkGfm]}>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </Markdown>
      <textarea
        placeholder="Añadir un comentario..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Agregar Comentario</button>
    </div>
  );
}

export default Comentarios;






