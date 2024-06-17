import { Router } from "express";
const router = Router()

router.get('/libros')
router.get('/libros/:id')
router.post('/libros')
router.put('/libros/:id')
router.delete('/libros/:id')