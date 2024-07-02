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
        const Prestamo = Prestamos.findByPk(id)
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
            Libro.save()
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
    const {fecha_inicio, fecha_devolucion, usuario_id, libro_id} = req.body
    try {
        const Prestamo = Prestamos.findByPk(id)
        if(Prestamo){
         Prestamo.fecha_inicio = fecha_inicio
         Prestamo.fecha_devolucion = fecha_devolucion
         Prestamo.id_usuario = usuario_id
         Prestamo.id_libro = libro_id
         await Prestamo.save()
         res.status(200).send("Libro actualizado correctamente")
         if(fecha_devolucion){
            Prestamo.activo = false
            Prestamo.save()
            const Libro = await Libros.findByPk(libro_id)
            Libro.prestado = false
            await Libro.save()
         }
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
    const Prestamo = await Prestamos.findByPk(id)
    if(Prestamo){
        const Libro = await Libros.findByPk(Prestamo.id_libro)
        Libro.prestado = 0
        Libro.save()
        Prestamo.destroy()
    }else{
        req.status(404).send("Prestamo no encontrado")
    }
 } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message})
 }
}