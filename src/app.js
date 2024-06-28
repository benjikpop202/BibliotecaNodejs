import express from 'express'
import LibrosRoutes from './routes/libros.routes.js'
import AutoresRoutes from './routes/autores.routes.js'
const app = express()
app.use(express.json())
app.use(LibrosRoutes)
app.use(AutoresRoutes)
export default app
