import {BibliotecaDB} from '../database/database.js'
import {DataTypes} from 'sequelize'
import {Libros} from './libros.js'
import {Usuarios} from './usuarios.js'

export const Prestamos = BibliotecaDB.define('prestamos',{
    id_prestamo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_inicio:{
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_devolucion:{
        type:DataTypes.DATE,
    }
})

Libros.hasMany(Prestamos,{
    foreignKey: 'id_libro',
    onDelete: 'CASCADE'
})

Prestamos.belongsTo(Libros,{
    foreignKey: 'id_libro'
})

Usuarios.hasMany(Prestamos,{
    foreignKey: 'id_usuario',
    onDelete: 'CASCADE'
})

Prestamos.belongsTo(Usuarios,{
    foreignKey: 'id_usuario'
})