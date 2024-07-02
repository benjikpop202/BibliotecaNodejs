import { Router } from "express";
import {agregarLibro, obtenerLibros, obtenerLibro, actualizarLibro, eliminarLibro}from '../controllers/libro.js'
const router = Router()

router.get('/libros', obtenerLibros)
router.get('/libros/:id', obtenerLibro)
router.post('/libros', agregarLibro)
router.put('/libros/:id', actualizarLibro)
router.delete('/libros/:id', eliminarLibro)

export default router