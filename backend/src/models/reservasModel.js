import pool from '../DBconfig/DBconfig.js'

export async function getReservaById(id) {
    const [rows] = await pool.query('SELECT * FROM reservas WHERE id = ?', [id])
    return rows[0];
}

export async function getAllReservas() {
    const [rows] = await pool.query('SELECT * FROM reservas')
    return rows;
}

export async function addReservas({ fechaYhora, descripcion, user_id , espacio_id }) {
    const [result] = await pool.query('INSERT INTO reservas (fechaYhora, descripcion, user_id, espacio_id) VALUES (?,?,?,?)', [fechaYhora, descripcion, user_id , espacio_id])
    return getReservaById(result.insertId);
}