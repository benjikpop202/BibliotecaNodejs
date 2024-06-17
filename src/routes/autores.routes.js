import { Router } from "express";
const router = Router()

router.get('/autores')
router.get('/autores/:id')
router.post('/autores')
router.put('/autores/:id')
router.delete('/autores/:id')