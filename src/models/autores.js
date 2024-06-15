import {BibliotecaDB} from '../database/database.js'
import {DataTypes} from 'sequelize'

export const Autores = BibliotecaDB.define('autores',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING
    }
})