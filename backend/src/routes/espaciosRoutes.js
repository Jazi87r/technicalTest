import { Router } from 'express';
import { readEspacios } from '../controllers/espaciosController.js'

const router = Router();

router.get('/', readEspacios);
/*
router.get('/:id', readCategoriaById);
router.post('/', createCategoria);
router.put('/:id', updateCategorias);
router.delete('/:id', deleteCategoria);
*/
export default router;
