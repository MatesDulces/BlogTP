import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Principal";
import Comentarios from "./components/Comentarios";
import Admin from "./components/Admin";

function Rutas() {
  const [almacen, setAlmacen] = useState([]);

  useEffect(() => {
    let localstorage = JSON.local(localStorage.getItem("array"));
    if (localstorage) setAlmacen(lolcalstorage);
  }, []);
  const [admin,setAdmin] = useState()

  return (
    <>
    <Routes>
    <Route
        path="/"
        element={<Principal Home={Home}/>}
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

      <Route 
        exact
        path="/Admin"
        element={<Admin admin={admin} setAdmin={setAdmin} />}
      />
      <Route path="/Rutas/:id" element={<Rutas />} />
    </Routes>
    </>
  );
}

export default Rutas;
