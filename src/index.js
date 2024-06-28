import app from './app.js'
import {BibliotecaDB} from './database/database.js'
import {Libros} from './models/libros.js'
import {Autores} from './models/autores.js'
import {Prestamos} from './models/prestamos.js'
import {Usuarios} from './models/usuarios.js'
const port = 3000

async function main(){
    try {
        await BibliotecaDB.sync({force:false})
        console.log("conexion exitosa");
        app.listen(port, ()=>{
            console.log("corriendo en el puerto",port);
        })
    } catch (error) {
        console.log("error de conexion");
    }
}

main()

