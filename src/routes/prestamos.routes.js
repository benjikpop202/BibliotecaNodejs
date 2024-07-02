import { Router } from "express";
import {agregarPrestamo, obtenerPrestamos, obtenerPrestamo, actualizarPrestamo, eliminarPrestamo} from '../controllers/prestamo.js'
const router = Router()

router.get('/prestamos', obtenerPrestamos)
router.get('/prestamos/:id', obtenerPrestamo)
router.post('/prestamos', agregarPrestamo)
router.put('/prestamos/:id', actualizarPrestamo)
router.delete('/prestamos/:id', eliminarPrestamo)

export default router