import { useEffect, useState } from 'react'
/*import './Categories.css'*/

const API_URL = '/api/reservas';

function Reservas() {

  const [reservas, setReservas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [newFechaYhora, setNewFechaYhora] = useState('')
  const [newDescripcion, setNewDescripcion] = useState('')
  const [newUser_id, setNewUser_id] = useState('')
  const [newEspacio_id, setNewEspacio_id] = useState('')
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    fetchReservas()
  }, [])

  async function fetchReservas() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to load espacios')
      setReservas(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!newFechaYhora.trim()) return
    setCreating(true)
    setError(null)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fechaYhora: newFechaYhora, descripcion: newDescripcion, user_id: newUser_id, espacio_id: newEspacio_id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to create category')
      setReservas((prev) => [...prev, data])
      setNewFechaYhora('')
      setNewDescripcion('')
      setNewUser_id('')
      setNewEspacio_id('')


    } catch (err) {
      setError(err.message)
    } finally {
      setCreating(false)
    }
  }

  

  return (
   
    <div className="Reservas-page">
      <h1>Reservas</h1>

      <form className="reservas-form" onSubmit={handleCreate}>
        <input
          type="text"
          placeholder='fecha'
          value={newFechaYhora}
          onChange={(e) => setNewFechaYhora(e.target.value)}
          disabled={creating}
        />
         <input
          type="text"
          placeholder='descripcion'
          value={newDescripcion}
          onChange={(e) => setNewDescripcion(e.target.value)}
          disabled={creating}
        />
        <input
          type="text"
          placeholder='userid'
          value={newUser_id}
          onChange={(e) => setNewUser_id(e.target.value)}
          disabled={creating}
        />
        <input
          type="text"
          placeholder='espacio_id'
          value={newEspacio_id}
          onChange={(e) => setNewEspacio_id(e.target.value)}
          disabled={creating}
        />
        <button type="submit" disabled={creating}>
          {creating ? 'Adding...' : 'Add'}
        </button>
      </form>

      {error && <p className="Reservas-error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : reservas.length === 0 ? (
        <p>No reservas yet.</p>
      ) : (
        <table className="Reservas-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>fecha y hora</th>
              <th>descripcion</th>
              <th>id usuario</th>
              <th>id espacio</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{reserva.fechaYhora}</td>
                <td>{reserva.descripcion}</td>
                <td>{reserva.user_id}</td>
                <td>{reserva.espacio_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  )
}

export default Reservas;
