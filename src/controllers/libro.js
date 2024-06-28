import {Libros} from '../models/libros.js'

export const obtenerLibros = (req, res)=>{res.send("obteniendo libros")}

export const obtenerLibro = (req,res)=>{}

export const agregarLibro = async (req,res)=>{
 const {titulo, descripcion, año, genero, id_autor} = req.body;
 try {
    const NewLibro = await Libros.create({
        titulo: titulo,
        descripcion: descripcion,
        year: año,
        genero: genero,
        id_autor: id_autor
     })
     console.log(NewLibro);
     res.send("libro agregado")
 } catch (error) {
    console.log(error);
 }
}

export const actualizarLibro = (req,res)=>{}

export const eliminarLibro = (req,res)=>{}