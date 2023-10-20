/*import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import './Post.css';

function Post() {
  const [nombre, setNombre] = useState("");
  const [lista, setLista] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [lista2, setLista2] = useState([]);
  const [markdownPreview, setMarkdownPreview] = useState("");

  useEffect(() => {
    const storedLista = JSON.parse(localStorage.getItem("lista")) || [];
    setLista(storedLista);
  }, []);

  const agregarTexto = (texto) => {
    if (texto.trim() !== "") {
      const nuevoItem = { text: texto, type: "item" };
      const updatedLista = [...lista, nuevoItem];
      setLista(updatedLista);
      localStorage.setItem("lista", JSON.stringify(updatedLista));
      setNombre(""); 
      setMarkdownPreview("");
  };

  return (
    <div className="container">
      <div>
        <h1>EL TITULO</h1>
        <input placeholder= "TITULO" > </input>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agregarTexto(nombre);
          }}
        >
          <textarea
            placeholder="ESCRIBE EN MARKDOWN 😊"
            rows="5"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setMarkdownPreview(e.target.value);
            }}
          />
          <Markdown remarkPlugins={[remarkGfm]}>{markdownPreview}</Markdown>
          <button type="submit">AGREGAR</button>
        </form>
      </div>
      <nav>
        <ul className="lista">
          <li>
            <Link className="Home" to="/">
              Volver a la página principal
            </Link>
          </li>
          <li>
            <Link className="Post" to="/post">
              Ir a página de Markdown
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Post;*/

  import {useState} from "react";
   function  Post(){
    const [nombre, setNombre] = useState("");
    const [comentario, setComentario]= useState ("");
    const [lista, setLista] = useState([]);
    const [lista2, setLista2]= useState ([]);

    const agregar = (nombre) => {
        setLista([...lista, nombre]);
    }
    const agrega = (comentario) => {
      setLista2([...lista2, comentario]);
  }
    return(
      <div>
        <input type="text" onChange = {(e)=> setNombre(e.target.value)}/>
        <button onClick= {() => agregar(nombre)}>AGREGAR</button>
        <ListaCompleta lista = {lista} ></ListaCompleta>

        <input type="text" onChange = {(e)=> setComentario(e.target.value)}></input>
        <buttom onClick= {() => agrega(comentario)}>COMENTAR</buttom>
        <ListaCompleta2 lista2 = {lista2} ></ListaCompleta2>
      </div>
    )
 }
 const ListaCompleta = ({lista}) => {
    return(
        <ol>{lista.map((item,i) => <li key = {i}>{item}</li>)}</ol>
    )
    }
 const ListaCompleta2 = ({lista2}) => {
  return(
          <ol>{lista2.map((item, o) => <li key = {o}>{item}</li>)}</ol>
  )
    }
    export default Post;
