import {BibliotecaDB} from '../database/database.js'
import {Libros} from './libros.js'
import {DataTypes} from 'sequelize'

export const Autores = BibliotecaDB.define('autores',{
    id_autor:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        type: DataTypes.STRING,
        allowNull: false
    }
})

Autores.hasMany(Libros, 
    {
        foreignKey: 'id_autor',
        onDelete: 'CASCADE'
    }
)

Libros.belongsTo(Autores, {
    foreignKey: 'id_autor'
 });