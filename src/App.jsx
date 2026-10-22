
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import ListaPersonajes from "./pages/ListaPersonajes";
import DetallePersonaje from "./pages/DetallePersonaje";
import Favoritos from "./pages/Favoritos";
import Registro from "./pages/Registro";
import NoEncontrado from "./pages/NoEncontrado";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lista" element={<ListaPersonajes />} />
        <Route path="/detalle/:id" element={<DetallePersonaje />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>

      <footer className="pie-pagina">
        <p>Dragon Ball Explorer | Proyecto React</p>
        <p>
          Datos obtenidos de{" "}
          <a
            href="https://dragonball-api.com/"
            target="_blank"
            rel="noreferrer"
          >
            Dragon Ball API
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
