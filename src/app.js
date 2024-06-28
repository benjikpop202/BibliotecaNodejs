import express from 'express'
import LibrosRoutes from './routes/libros.routes.js'
const app = express()

app.use(LibrosRoutes)
app.use(express.json())
export default app
