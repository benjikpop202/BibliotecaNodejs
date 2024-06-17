import { Router } from "express";
const router = Router()

router.get('/usuario')
router.get('/usuario/:id')
router.post('/usuarios')
router.put('/usuarios/:id')
router.delete('/usuarios/:id')