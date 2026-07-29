import { getAllEspacios} from '../models/espaciosModel.js'

export async function readEspacios(req, res) {
    try {
        const espacios = await getAllEspacios();
        res.status(200).json(espacios)
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

export async function createCategoria(req, res) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'name is required' });
        }
        const categoria = await addCategoria({ name })
        res.status(201).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

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