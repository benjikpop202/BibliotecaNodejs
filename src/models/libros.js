import {BibliotecaDB} from '../database/database.js'
import {DataTypes} from 'sequelize'


export const Libros = BibliotecaDB.define('libros', {
    id_libro:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: false
    },
    prestado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})