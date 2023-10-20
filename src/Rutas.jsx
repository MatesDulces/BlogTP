import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";
import Admin from "./Admin";
import Comentarios from "./Comentarios";
import HomeAdmin from "./HomeAdmin"

function Rutas() {
 /* const [almacen, setAlmacen] = useState([]);

  useEffect(() => {
    let localstorage = JSON.parse(localStorage.getItem("array"));
    if (localstorage) setAlmacen(lolcalstorage);
  }, []);*/
  
  const [admin,setAdmin] = useState(false);
  const updateAdminState = (isAdmin) => {
    setAdmin(isAdmin);
  };

  return (
    <>
    <Routes>
 <Route path="/" element={<Home admin={admin} />} />
        <Route
          path="/admin"
          element={<Admin setAdmin={updateAdminState} />}
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
       <route
        exact
        path="/HomeAdmin"
        element={<HomeAdmin />}
       />
      <Route path="/Rutas/:id" element={<Rutas />} />
    </Routes>
    </>
  );
}

export default Rutas;
