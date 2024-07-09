import { Router } from "express";
import { getDepoimentoRandom } from "../controllers/depoimentoController.js";

const router = new Router()

router.get('/', getDepoimentoRandom)

export default router