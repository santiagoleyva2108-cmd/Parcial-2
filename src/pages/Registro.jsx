import { useState } from 'react';

export default function Registro({ usuarios = [], setUsuarios }) {
  const [form, setForm] = useState({ identificacion: '', nombre: '', correo: '' });
  const [editandoId, setEditandoId] = useState(null);
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' }); // tipo: 'error' o 'exito'

  // Manejar cambios en los inputs del formulario controlado
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje({ texto: '', tipo: '' });

    // 1. Validar campos vacíos
    if (!form.identificacion.trim() || !form.nombre.trim() || !form.correo.trim()) {
      setMensaje({ texto: 'Error: Ningún campo puede estar vacío.', tipo: 'error' });
      return;
    }

    // 2. Validar que la identificación sea solo números
    if (!/^\d+$/.test(form.identificacion)) {
      setMensaje({ texto: 'Error: La identificación debe contener solo números.', tipo: 'error' });
      return;
    }

    // 3. Validar que el correo incluya '@'
    if (!form.correo.includes('@')) {
      setMensaje({ texto: 'Error: El correo debe incluir "@".', tipo: 'error' });
      return;
    }

    if (editandoId === null) {
      // --- MODO CREAR ---
      // Validar que la identificación no exista previamente en la lista
      const existe = usuarios.some((u) => u.identificacion === form.identificacion);
      if (existe) {
        setMensaje({
          texto: `Ya existe un usuario con la identificación ${form.identificacion}`,
          tipo: 'error',
        });
        return;
      }

      setUsuarios([...usuarios, form]);
      setMensaje({ texto: '¡Usuario registrado con éxito!', tipo: 'exito' });
    } else {
      // --- MODO EDITAR ---
      // Validar que la nueva identificación no pertenezca a otro usuario diferente
      const existeOtro = usuarios.some(
        (u) => u.identificacion === form.identificacion && u.identificacion !== editandoId
      );
      if (existeOtro) {
        setMensaje({
          texto: `Ya existe otro usuario con la identificación ${form.identificacion}`,
          tipo: 'error',
        });
        return;
      }

      setUsuarios(
        usuarios.map((u) => (u.identificacion === editandoId ? form : u))
      );
      setMensaje({ texto: '¡Cambios guardados con éxito!', tipo: 'exito' });
      setEditandoId(null);
    }

    // Limpiar formulario tras la acción exitosa
    setForm({ identificacion: '', nombre: '', correo: '' });
  };

  // Cargar datos en el formulario para editar
  const handleEditar = (usuario) => {
    setEditandoId(usuario.identificacion);
    setForm(usuario);
    setMensaje({ texto: '', tipo: '' });
  };

  // Cancelar la edición actual
  const handleCancelar = () => {
    setEditandoId(null);
    setForm({ identificacion: '', nombre: '', correo: '' });
    setMensaje({ texto: '', tipo: '' });
  };

  // Eliminar usuario con confirmación
  const handleEliminar = (identificacion) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      setUsuarios(usuarios.filter((u) => u.identificacion !== identificacion));
      
      // Si el usuario que se estaba editando es el que se eliminó, cancelamos la edición
      if (editandoId === identificacion) {
        handleCancelar();
      }
      setMensaje({ texto: 'Usuario eliminado correctamente.', tipo: 'exito' });
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro y Gestión de Usuarios</h2>

      {/* Mensajes de error o éxito en pantalla */}
      {mensaje.texto && (
        <div className={`alerta-mensaje ${mensaje.tipo}`}>
          {mensaje.texto}
        </div>
      )}

      {/* Formulario controlado */}
      <form onSubmit={handleSubmit} className="form-registro">
        <div className="campo-form">
          <label>Identificación (solo números):</label>
          <input
            type="text"
            name="identificacion"
            value={form.identificacion}
            onChange={handleChange}
          />
        </div>

        <div className="campo-form">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="campo-form">
          <label>Correo electrónico:</label>
          <input
            type="text"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
        </div>

        <div className="acciones-form">
          <button type="submit" className="btn-principal">
            {editandoId === null ? 'Registrar' : 'Guardar cambios'}
          </button>
          
          {editandoId !== null && (
            <button type="button" onClick={handleCancelar} className="btn-secundario">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <hr className="separador" />

      {/* Lista de usuarios registrados */}
      <div className="seccion-lista">
        <h3>Usuarios Registrados ({usuarios.length})</h3>

        {usuarios.length === 0 ? (
          <p className="vacio-texto">Aún no hay usuarios registrados</p>
        ) : (
          <ul className="ul-usuarios">
            {usuarios.map((usuario) => (
              <li key={usuario.identificacion} className="li-usuario">
                <div className="info-usuario">
                  <span><strong>ID:</strong> {usuario.identificacion}</span>
                  <span><strong>Nombre:</strong> {usuario.nombre}</span>
                  <span><strong>Correo:</strong> {usuario.correo}</span>
                </div>
                <div className="botones-usuario">
                  <button onClick={() => handleEditar(usuario)} className="btn-editar">
                    Editar
                  </button>
                  <button onClick={() => handleEliminar(usuario.identificacion)} className="btn-eliminar">
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}