import { getAllReservas, addReservas } from '../models/reservasModel.js'

export async function readReservas(req, res) {
    try {
        const reservas = await getAllReservas();
        res.status(200).json(reservas)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/*
export async function readCategoriaById(req, res) {
    try {
        const categoria = await getCategoriaById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria not found' });
        }
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
*/
export async function createReservas(req, res) {
    try {
        const { fechaYhora, descripcion, user_id , espacio_id } = req.body;
        const reserva = await addReservas({  fechaYhora, descripcion, user_id , espacio_id })
        res.status(201).json(reserva)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
/*
export async function updateCategorias(req, res) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'name is required' });
        }
        const categoria = await updateCategoria(req.params.id, { name })
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria not found' });
        }
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteCategoria(req, res) {
    try {
        const deleted = await removeCategoria(req.params.id)
        if (!deleted) {
            return res.status(404).json({ error: 'Categoria not found' });
        }
        res.status(200).json({ deleted: true })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
*/