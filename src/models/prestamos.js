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
        defaultValue: DataTypes.NOW
    },
    fecha_devolucion:{
        type:DataTypes.DATE,
        defaultValue: () => {
            const oneWeekFromNow = new Date();
            oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
            return oneWeekFromNow;
          }
    }
})

Libros.belongsToMany(Usuarios,{through:Prestamos})
Usuarios.belongsToMany(Libros,{through: Prestamos})