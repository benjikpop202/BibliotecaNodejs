import express from 'express'
import LibrosRoutes from './routes/libros.routes.js'
import AutoresRoutes from './routes/autores.routes.js'
import UsuariosRoutes from './routes/usuarios.routes.js'
import PrestamosRoutes from './routes/prestamos.routes.js'
const app = express()
app.use(express.json())
app.use(LibrosRoutes)
app.use(AutoresRoutes)
app.use(UsuariosRoutes)
app.use(PrestamosRoutes)

export default app
