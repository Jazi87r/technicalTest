import { Router } from 'express';
import { readReservas, createReservas } from '../controllers/reservasController.js'

const router = Router();

router.get('/', readReservas);
router.post('/', createReservas);

/*
router.get('/:id', readCategoriaById);
router.post('/', createCategoria);
router.put('/:id', updateCategorias);
router.delete('/:id', deleteCategoria);
*/
export default router;