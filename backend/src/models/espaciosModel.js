import pool from '../DBconfig/DBconfig.js'

export async function getEspaciosById(id) {
    const [rows] = await pool.query('SELECT * FROM espacios WHERE id = ?', [id])
    return rows[0];
}

export async function getAllEspacios() {
    const [rows] = await pool.query('SELECT * FROM espacios')
    return rows;
}
/*
export async function addCategoria({ name }) {
    const [result] = await pool.query('INSERT INTO categoria (name) VALUES (?)', [name])
    return getCategoriaById(result.insertId);
}

export async function removeCategoria(id) {
    const [result] = await pool.query('DELETE FROM categoria WHERE id = ?', [id])
    return result.affectedRows > 0;
}
*/


export async function updateEspacios(id, { nombre, tipo, ubicacion, capacidad, habilitado }) {
    const [result] = await pool.query('UPDATE Espacios SET nombre = ?, tipo = ?, ubicacion = ?, capacidad = ?, habilitado = ?  WHERE id = ?', [nombre, tipo, ubicacion, capacidad, habilitado, id])
    if (result.affectedRows === 0) return null;
    return getEspaciosById(id);
}

