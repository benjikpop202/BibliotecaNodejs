import { Prestamos } from '../models/prestamos.js'
import {Libros} from '../models/libros.js'
import { Usuarios } from '../models/usuarios.js'


export const obtenerPrestamos = async (req, res)=>{
    try {
        const prestamos = await Prestamos.findAll()
        res.status(200).json(prestamos)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const obtenerPrestamo = async (req,res)=>{
    const id = req.params.id
    try {
        const Prestamo = await Prestamos.findByPk(id)
        if(Prestamo){
            res.status(200).json(Prestamo)
        }else{
            res.status(404).send("prestamo no encontrado")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const agregarPrestamo = async (req,res)=>{
    const {fecha_inicio, id_usuario, id_libro} = req.body
    try {
        const Libro = await Libros.findByPk(id_libro)
        if(!Libro){
            res.status(404).send("libro no encontrado")
        }
        if(Libro.prestado === false){
            const Usuario = await Usuarios.findByPk(id_usuario)
            if (!Usuario) {
                return res.status(404).send("Error. El usuario no existe");
            }
            Libro.prestado = true
            await Libro.save()
            const NewPrestamo = await Prestamos.create({
                fecha_inicio: fecha_inicio,
                id_libro: id_libro,
                id_usuario: id_usuario
            })
            console.log(NewPrestamo);
            res.status(201).send("Prestamo agregado")
        }else{
            res.status(400).send("Error. El libro escogido ya esta prestado")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const actualizarPrestamo = async (req,res)=>{
    const id = req.params.id
    const {fecha_inicio, fecha_devolucion, id_usuario, id_libro} = req.body
    try {
        const Prestamo = await Prestamos.findByPk(id)
        if(Prestamo){
         if(fecha_inicio !== undefined){Prestamo.fecha_inicio = fecha_inicio}
         if(fecha_devolucion !== undefined){Prestamo.fecha_devolucion = fecha_devolucion}
         if(id_usuario !== undefined){Prestamo.id_usuario = id_usuario}
         if(id_libro !== undefined){Prestamo.id_libro = id_libro}
         await Prestamo.save()
         if(fecha_devolucion !== undefined){
            Prestamo.activo = false
            await Prestamo.save()
         }
         res.status(200).send("Prestamo actualizado correctamente")
        }else{
            res.status(404).send("prestamo no encontrado")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const eliminarPrestamo = async (req,res)=>{
    const id = req.params.id
   try {
      const DeletePrestamo = Prestamos.destroy({where: {id_prestamo: id}})
      if(DeletePrestamo){
         res.status(200).send(`Prestamo con ID: ${id} eliminado correctamente.`)
      }else{
         res.status(404).send(`no se ah encontrado ningun prestamo con ID: ${id}`)
      }
   } catch (error) {
      res.status(500).json({message: error.message})
      console.log(error);
   }
}