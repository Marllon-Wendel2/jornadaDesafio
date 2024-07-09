import { Router } from "express";
import { deleteDepoimento, getDepoimentos, getDepoimentosId, postDepoimentos, putDepoimentos } from "../controllers/depoimentoController.js";
import multer from "multer";

// const storage= multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, "img/")
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo salvo
//       }
// });

const storage = multer.memoryStorage()

const upload = multer({storage: storage})

const router = Router()

router.post('/', upload.single("file"),postDepoimentos)
router.get('/', getDepoimentos)
router.get('/:id', getDepoimentosId)
router.put('/:id', putDepoimentos)
router.delete('/:id', deleteDepoimento)

export default router