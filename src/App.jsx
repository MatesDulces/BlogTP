import React, { useState } from "react";
import "./App.css";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';


function Lista() {
  const [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [mostrarFormPost, setMostrarFormPost] = useState(false); 
  const [mostrarFormComentario, setMostrarFormComentario] = useState(false); 


  return (
          </div>
 <Link to="/markdown">Hacer blog</Link>  
    <ListaCompleta lista={lista} />
        <h2>Comentarios</h2>
        <ListaCompleta2 lista2={lista2} />
      </div>
    </div>
  );
};
const ListaCompleta = ({ lista }) => {
  return (
    <ul>
      {lista.map((item, i) => (
        <li key={i}>{item.text}</li>
      ))}
    </ul>
  );
};

const ListaCompleta2 = ({ lista2 }) => {
  return (
    <ul>
      {lista2.map((item, o) => (
        <li key={o}>{item.text}</li>
      ))}
    </ul>
  );
};
