import pool from '../DBconfig/DBconfig.js'
/*
export async function getCategoriaById(id) {
    const [rows] = await pool.query('SELECT * FROM categoria WHERE id = ?', [id])
    return rows[0];
}*/

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

export async function updateCategoria(id, { name }) {
    const [result] = await pool.query('UPDATE categoria SET name = ? WHERE id = ?', [name, id])
    if (result.affectedRows === 0) return null;
    return getCategoriaById(id);
}
*/