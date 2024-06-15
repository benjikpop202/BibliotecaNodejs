import app from './app.js'
import {BibliotecaDB} from './database/database.js'
import './models/libros.js'
const port = 3000

async function main(){
    try {
        await BibliotecaDB.sync()
        console.log("conexion exitosa");
        app.listen(port, ()=>{
            console.log("corriendo en el puerto",port);
        })
    } catch (error) {
        console.log("error de conexion");
    }
}

main()

