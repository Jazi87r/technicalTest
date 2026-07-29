import pool from '../DBconfig/DBconfig.js'
import {updateEspacios, getEspaciosById} from './espaciosModel.js'
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

    const espacio= await getEspaciosById(espacio_id);

    const nombre = espacio.nombre
    const tipo = espacio.tipo
    const ubicacion = espacio.ubicacion
    const capacidad = espacio.capacidad
    const habilitado = 0
    updateEspacios(espacio.id, { nombre, tipo, ubicacion, capacidad, habilitado });

}