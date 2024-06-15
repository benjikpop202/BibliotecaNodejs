import app from './app.js'
import {BibliotecaDB} from './database/database.js'
import './models/libros.js'
import './models/autores.js'
import './models/LibroAutor.js'
import './models/usuarios.js'
import './models/prestamos.js'
const port = 3000

async function main(){
    try {
        await BibliotecaDB.sync({force:true})
        console.log("conexion exitosa");
        app.listen(port, ()=>{
            console.log("corriendo en el puerto",port);
        })
    } catch (error) {
        console.log("error de conexion");
    }
}

main()

