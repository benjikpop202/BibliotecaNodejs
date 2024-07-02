import { Router } from "express";
import {agregarUsuario, obtenerUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario} from '../controllers/usuario.js'
const router = Router()

router.get('/usuarios', obtenerUsuarios)
router.get('/usuarios/:id', obtenerUsuario)
router.post('/usuarios', agregarUsuario)
router.put('/usuarios/:id', actualizarUsuario)
router.delete('/usuarios/:id', eliminarUsuario)

export default router