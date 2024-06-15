import {BibliotecaDB} from '../database/database.js'
import {Libros} from './libros.js'
import { Autores } from './autores.js'

export const LibroAutor = BibliotecaDB.define('LibroAutor',{})
 Libros.belongsToMany(Autores, {through:LibroAutor})
 Autores.belongsToMany(Libros, {through:LibroAutor})
