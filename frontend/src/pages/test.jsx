import { useEffect, useState } from 'react'
import './Categories.css'

const API_URL = '/api/categoria'

function Categories() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [newName, setNewName] = useState('')
  const [creating, setCreating] = useState(false)

  const [editingId, setEditingId] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [savingId, setSavingId] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    fetchCategorias()
  }, [])

  async function fetchCategorias() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to load categories')
      setCategorias(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!newName.trim()) return
    setCreating(true)
    setError(null)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to create category')
      setCategorias((prev) => [...prev, data])
      setNewName('')
    } catch (err) {
      setError(err.message)
    } finally {
      setCreating(false)
    }
  }

  function startEdit(categoria) {
    setEditingId(categoria.id)
    setEditingName(categoria.name)
  }

  function cancelEdit() {
    setEditingId(null)
    setEditingName('')
  }

  async function handleUpdate(id) {
    if (!editingName.trim()) return
    setSavingId(id)
    setError(null)
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editingName.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to update category')
      setCategorias((prev) => prev.map((c) => (c.id === id ? data : c)))
      cancelEdit()
    } catch (err) {
      setError(err.message)
    } finally {
      setSavingId(null)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this category?')) return
    setDeletingId(id)
    setError(null)
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to delete category')
      setCategorias((prev) => prev.filter((c) => c.id !== id))
    } catch (err) {
      setError(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="categories-page">
      <h1>Categories</h1>

      <form className="categories-form" onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="New category name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          disabled={creating}
        />
        <button type="submit" disabled={creating || !newName.trim()}>
          {creating ? 'Adding...' : 'Add'}
        </button>
      </form>

      {error && <p className="categories-error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : categorias.length === 0 ? (
        <p>No categories yet.</p>
      ) : (
        <table className="categories-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>
                  {editingId === categoria.id ? (
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      disabled={savingId === categoria.id}
                      autoFocus
                    />
                  ) : (
                    categoria.name
                  )}
                </td>
                <td className="categories-actions">
                  {editingId === categoria.id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(categoria.id)}
                        disabled={savingId === categoria.id || !editingName.trim()}
                      >
                        {savingId === categoria.id ? 'Saving...' : 'Save'}
                      </button>
                      <button onClick={cancelEdit} disabled={savingId === categoria.id}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(categoria)}>Edit</button>
                      <button
                        onClick={() => handleDelete(categoria.id)}
                        disabled={deletingId === categoria.id}
                      >
                        {deletingId === categoria.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Categories