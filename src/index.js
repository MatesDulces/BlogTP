import React from "react";
import ReactDOM from "react-dom/client";
import Rutas from "./Rutas";
import { BrowserRouter} from "react-router-dom";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Rutas/>
    </BrowserRouter>
  </React.StrictMode>
);
