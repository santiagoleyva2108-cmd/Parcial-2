
const API_BASE = "https://dragonball-api.com/api";

export const obtenerPersonajes = async (pagina = 1, limite = 12) => {
  const respuesta = await fetch(
    `${API_BASE}/characters?page=${pagina}&limit=${limite}`
  );

  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los personajes.");
  }

  const datos = await respuesta.json();

  return {
    personajes: datos.items ?? [],
    totalPaginas: datos.meta?.totalPages ?? 1,
  };
};

export const obtenerPersonajePorId = async (id) => {
  const respuesta = await fetch(`${API_BASE}/characters/${id}`);

  if (!respuesta.ok) {
    throw new Error("No se encontró el personaje.");
  }

  return await respuesta.json();
};
