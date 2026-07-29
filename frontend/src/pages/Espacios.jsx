import { useEffect, useState } from 'react'
/*import './Categories.css'*/

const API_URL = '/api/espacios'

function Espacios() {
  console.log(API_URL)
  const [espacios, setEspacios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEspacios()
  }, [])

  async function fetchEspacios() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to load espacios')
      setEspacios(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }





  return (
    <div className="Espacios-page">
      <h1>Espacios</h1>

      {error && <p className="Espacios-error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : espacios.length === 0 ? (
        <p>No espacios yet.</p>
      ) : (
        <table className="espacios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Ubicación</th>
              <th>Capacidad</th>
              <th>Habilitado</th>
            </tr>
          </thead>
          <tbody>
            {espacios.map((espacio) => (
              <tr key={espacio.id}>
                <td>{espacio.id}</td>
                <td>{espacio.nombre}</td>
                <td>{espacio.tipo}</td>
                <td>{espacio.ubicacion}</td>
                <td>{espacio.capacidad}</td>
                <td>{espacio.habilitado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  )
}

export default Espacios;
