import React from "react";
import ReactDOM from "react-dom/client";
import Rutas from "./Rutas";
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Rutas/>
     <Home lista={lista} lista2={lista2} />
    </BrowserRouter>
  </React.StrictMode>
);
