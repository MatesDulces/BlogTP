import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";
import Admin from "./Admin";
import Comentarios from "./Comentarios";

function Rutas() {
 /* const [almacen, setAlmacen] = useState([]);

  useEffect(() => {
    let localstorage = JSON.parse(localStorage.getItem("array"));
    if (localstorage) setAlmacen(lolcalstorage);
  }, []);*/
  
  const [admin,setAdmin] = useState();
 
  return (
    <>
    <Routes>
 <Route path="/" element={<Home admin={admin} />} />
        <Route
          path="/admin"
          element={<Admin admin={admin} setAdmin={setAdmin}/>}
        />
      <Route
        exact
        path="/Post"
        element={<Post />}
      />
       <Route
        exact
        path="/Comentarios"
        element={<Comentarios />}
      />
        <Route path="/comentar/:postId" element={<Comentarios />} />
      
      <Route path="/Rutas/:id" element={<Rutas />} />
    </Routes>
    </>
  );
}

export default Rutas;
