import { Router } from "express";
import { deleteOne, getAllDestinos, getOne, postDestinos, putDestino } from "../controllers/destinoController.js";

const router = Router()

router.post('/', postDestinos)
router.get('/', getAllDestinos)
router.get('/:id', getOne)
router.put('/:id', putDestino)
router.delete('/:id', deleteOne)

export default router