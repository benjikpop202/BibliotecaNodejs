import { Router } from "express";
const router = Router()

router.get('/prestamos')
router.get('/prestamos/:id')
router.post('/prestamos')
router.put('/prestamos/:id')
router.delete('/prestamos/:id')