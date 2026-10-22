
function Buscador({
  busqueda,
  setBusqueda,
  raza,
  setRaza,
}) {
  return (
    <section className="controles-listado">
      <input
        type="search"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
        aria-label="Buscar personaje por nombre"
      />

      <select
        value={raza}
        onChange={(evento) => setRaza(evento.target.value)}
        aria-label="Filtrar por raza"
      >
        <option value="">Todas las razas</option>
        <option value="Saiyan">Saiyan</option>
        <option value="Human">Human</option>
        <option value="Namekian">Namekian</option>
        <option value="Majin">Majin</option>
        <option value="Frieza Race">Frieza Race</option>
        <option value="Android">Android</option>
        <option value="God">God</option>
        <option value="Angel">Angel</option>
      </select>
    </section>
  );
}

export default Buscador;
