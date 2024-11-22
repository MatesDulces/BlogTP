import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import './Comentarios.css';

function Comentarios(props) {
  const { postId } = useParams();
  const [comentario, setComentario] = useState('');
  const [imagen, setImagen] = useState('');
  const { admin } = props;
  const [autor, setAutor] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios${postId}`)) || [];
    setComentarios(comentariosGuardados);
  }, [postId]);

  const handleAgregarComentario = () => {
    if (comentario.trim() !== '') {
      const nuevoComentario = {
        autor: autor,
        texto: comentario,
        imagen: imagen || null, // Agregar URL de la imagen si está disponible
      };
      setComentarios([...comentarios, nuevoComentario]);
      localStorage.setItem(`comentarios${postId}`, JSON.stringify([...comentarios, nuevoComentario]));
      setComentario('');
      setImagen('');
    }
  };

  const handleBorrarComentario = (index) => {
    const comentariosActualizados = [...comentarios];
    comentariosActualizados.splice(index, 1);
    setComentarios(comentariosActualizados);
    localStorage.setItem(`comentarios${postId}`, JSON.stringify(comentariosActualizados));
  };

  return (
    <div>
      <h1>Comentarios del Post {postId}</h1>
      <div className="comentario">
        <input
          type="text"
          placeholder="Nombre del autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <textarea
          placeholder="Añadir un comentario..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la imagen (opcional)"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <button onClick={handleAgregarComentario}>Agregar Comentario</button>
      </div>
      {comentarios.length > 0 && (
        <div className="encabezado-comentarios">
          <h2>Comentarios anteriores:</h2>
        </div>
      )}
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario">
          <h3>Usuario: {comentario.autor}</h3>
          <Markdown remarkPlugins={[remarkGfm]}>{comentario.texto}</Markdown>
          {comentario.imagen && <img src={comentario.imagen} alt="Comentario" className="comentario-imagen" />}
          {admin && (
            <button onClick={() => handleBorrarComentario(index)}>Borrar Comentario</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comentarios;
