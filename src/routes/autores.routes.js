import { Router } from "express";
import {agregarAutor, obtenerAutores} from '../controllers/autor.js'
const router = Router()

router.get('/autores', obtenerAutores)
router.get('/autores/:id')
router.post('/autores', agregarAutor)
router.put('/autores/:id')
router.delete('/autores/:id')

export default router