
# 🐉 Dragon Ball Explorer - Parcial Frontend

Aplicación web desarrollada en **React** y **Vite** que consume la [Dragon Ball API](https://dragonball-api.com/), implementando navegación por rutas, sistema de favoritos persistente y un módulo completo de gestión de usuarios (CRUD) con almacenamiento local (`localStorage`).

---

## 🚀 Tecnologías Utilizadas

* **React** (Componentes funcionales y Hooks: `useState`, `useEffect`)
* **React Router DOM** (Gestión de rutas y navegación entre vistas)
* **CSS3** (Estilos centralizados y diseño responsivo)
* **LocalStorage** (Persistencia local de usuarios y personajes favoritos)
* **Fetch API** (Consumo asíncrono de datos de la API externa)

---

## 📋 Características Principales

1. **Página de Inicio (`/`)**: Presentación atractiva del proyecto con accesos directos al listado y al registro.
2. **Listado de Personajes (`/lista`)**: 
   * Paginación completa de la API.
   * Buscador interactivo por nombre y filtro por raza.
   * Tarjetas dinámicas con la opción de agregar/quitar de favoritos.
3. **Detalle de Personaje (`/detalle/:id`)**: Vista detallada con información avanzada del guerrero (Ki, Ki máximo, afiliación, descripción e historia).
4. **Favoritos (`/favoritos`)**: Sección dedicada exclusivamente a los personajes guardados por el usuario, persistidos en el navegador.
5. **Gestión de Usuarios / Registro (`/registro`)**: Módulo CRUD completo para registrar, editar y eliminar usuarios de forma local.

---

## 🛠️ Instrucciones de Instalación y Ejecución local

Sigue estos pasos para clonar y ejecutar el proyecto en tu computadora:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/santiagoleyva2108-cmd/Parcial-2.git](https://github.com/santiagoleyva2108-cmd/Parcial-2.git)
