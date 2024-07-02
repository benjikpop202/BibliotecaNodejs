import { Router } from "express";
import {agregarAutor, obtenerAutores, obtenerAutor,actualizarAutor, eliminarAutor} from '../controllers/autor.js'
const router = Router()

router.get('/autores', obtenerAutores)
router.get('/autores/:id', obtenerAutor)
router.post('/autores', agregarAutor)
router.put('/autores/:id', actualizarAutor)
router.delete('/autores/:id', eliminarAutor)

export default router