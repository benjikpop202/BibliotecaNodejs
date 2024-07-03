import {Autores} from '../models/autores.js'

export const obtenerAutores = async (req, res)=>{
   try {
      const autores = await Autores.findAll()
      res.status(200).json(autores)
   } catch (error) {
      res.status(500).json({message: error.message})
      console.log(error);
   }

}

export const obtenerAutor = async (req,res)=>{
   const id = req.params.id;
   try {
      const Autor = await Autores.findByPk(id)
      if(Autor){
         res.status(200).json(Autor)
      }else{
         res.status(404).send("autor no encontrado")
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({message: error.message})
   }
}

export const agregarAutor = async (req,res)=>{
 const {nombre, apellido, descripcion} = req.body
 try {
    const NewAutor = await Autores.create({
        nombre: nombre,
        apellido: apellido,
        descripcion: descripcion
     })
      res.status(201).send("autor agregado")
      console.log(NewAutor);
 } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message})
 }

}

export const actualizarAutor = async (req,res)=>{
   const id = req.params.id
   const {nombre, apellido, descripcion} = req.body
   try {
      const Autor = await Autores.findByPk(id)
      if(Autor){
         if(nombre !== undefined){Autor.nombre = nombre}
         if(apellido !== undefined){Autor.apellido = apellido}
         if(descripcion !== undefined){Autor.descripcion = descripcion}
        await Autor.save()
      }else{
         res.status(404).send("autor no encontrado")
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({message: error.message})
   }
}

export const eliminarAutor = async (req,res)=>{
   const id = req.params.id
   try {
      const DeleteAutor = await Autores.destroy({where: {id_autor:id}})
      if (DeleteAutor) {
         res.status(200).send(`Autor con ID: ${id} eliminado correctamente.`);
     } else {
         res.status(404).send(`No se encontró ningún autor con ID ${id}.`);
     }
      console.log(DeleteAutor);
   } catch (error) {
      console.log(error);
      res.status(500).json({message: error.message})
   }
}