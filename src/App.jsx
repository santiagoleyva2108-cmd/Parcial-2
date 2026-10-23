import { useState, useEffect } from "react";
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
  // 1. Estado de favoritos inicializado desde localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("dragonball_favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  // 2. Estado de usuarios inicializado desde localStorage
  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem("dragonball_usuarios");
    return guardados ? JSON.parse(guardados) : [];
  });

  // 3. Sincronizar con localStorage cada vez que cambien los favoritos
  useEffect(() => {
    localStorage.setItem("dragonball_favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // 4. Sincronizar con localStorage cada vez que cambien los usuarios
  useEffect(() => {
    localStorage.setItem("dragonball_usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // 5. Función para agregar o quitar un personaje de favoritos
  const toggleFavorito = (personaje) => {
    const existe = favoritos.some((fav) => fav.id === personaje.id);
    if (existe) {
      setFavoritos(favoritos.filter((fav) => fav.id !== personaje.id));
    } else {
      setFavoritos([...favoritos, personaje]);
    }
  };

  return (
    <>
      {/* Pasamos ambos contadores al Navbar */}
      <Navbar 
        contadorFavoritos={favoritos.length} 
        cantidadUsuarios={usuarios.length} 
      />

      <Routes>
        <Route path="/" element={<Inicio />} />
        
        <Route 
          path="/lista" 
          element={<ListaPersonajes favoritos={favoritos} toggleFavorito={toggleFavorito} />} 
        />
        
        <Route 
          path="/detalle/:id" 
          element={<DetallePersonaje favoritos={favoritos} toggleFavorito={toggleFavorito} />} 
        />
        
        <Route 
          path="/favoritos" 
          element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />} 
        />
        
        <Route 
          path="/registro" 
          element={<Registro usuarios={usuarios} setUsuarios={setUsuarios} />} 
        />

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