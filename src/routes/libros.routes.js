import { Router } from "express";
import {agregarLibro, obtenerLibros}from '../controllers/libro.js'
const router = Router()

router.get('/libros', obtenerLibros)
router.get('/libros/:id')
router.post('/libros', agregarLibro)
router.put('/libros/:id')
router.delete('/libros/:id')

export default router