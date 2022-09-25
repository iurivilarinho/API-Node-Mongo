import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router()

router.get("/autores", AutorController.listarAutor)
router.get("/autores/:id", AutorController.listarAutoresId)
router.post("/autores", AutorController.cadastrarAutor)
router.put("/autores/:id", AutorController.atualizarAutor)
router.delete("/autores/:id", AutorController.excluirAutor)

export default router;