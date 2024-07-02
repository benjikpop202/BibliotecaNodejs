
import {Libros} from '../models/libros.js'

export const obtenerLibros = async (req, res)=>{
   try {
      const libros = await Libros.findAll()
      res.status(200).json(libros)
   } catch (error) {
      console.log(error);
      res.status(500).json({message: error.message})
   }
}

export const obtenerLibro = async (req,res)=>{
   const id = req.params.id
   try {
      const Libro = await Libros.findByPk(id)
      if(Libro){
         res.status(200).json(Libro)
      }else{
         res.status(404).send(`No se encontró ningún libro con ID: ${id}.`)
      }
      
   } catch (error) {
      console.log(error);
      res.status(500).json({message: error.message})
   }
}

export const agregarLibro = async (req,res)=>{
 const {titulo, descripcion, year, genero, id_autor} = req.body;
 try {
    const NewLibro = await Libros.create({
        titulo: titulo,
        descripcion: descripcion,
        year: year,
        genero: genero,
        id_autor: id_autor
     })
      console.log(NewLibro);
      res.status(201).send("libro agregado")
     
 } catch (error) {
   res.status(500).json({message: error.message})
    console.log(error);
 }
}

export const actualizarLibro = async (req,res)=>{
   const id = req.params.id
   const {titulo, descripcion, año, genero} = req.body
   try {
      const Libro = await Libros.findByPk(id)
      if(Libro){
         Libro.titulo = titulo
         Libro.descripcion = descripcion
         Libro.year = año
         Libro.genero = genero
        await Libro.save()
         res.status(200).send("Libro actualizado correctamente")
      }else{
         res.status(404).send("Libro no encontrado")
      }
   } catch (error) {
      res.status(500).json({message: error.message})
      console.log(error);
   }
}

export const eliminarLibro = (req,res)=>{
   const id = req.params.id
   try {
      const DeleteLibro = Libros.destroy({where: {id_libro: id}})
      if(DeleteLibro){
         res.status(200).send(`Libro con ID: ${id} eliminado correctamente.`)
      }else{
         res.status(404).send(`no se ah encontrado ningun libro con ID: ${id}`)
      }
   } catch (error) {
      res.status(500).json({message: error.message})
      console.log(error);
   }
}
