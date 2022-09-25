import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router()

router.get("/livros", LivroController.listarLivros)
router.get("/livros/:id", LivroController.listarLivrosId)
router.post("/livros", LivroController.cadastrarLivro)

export default router;