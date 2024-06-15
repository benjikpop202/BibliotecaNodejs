import {BibliotecaDB} from '../database/database.js'
import {DataTypes, INTEGER} from 'sequelize'


export const Libros = BibliotecaDB.define('libros', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    year:{
        type: DataTypes.INTEGER
    },
    genero:{
        type: DataTypes.STRING
    }
})