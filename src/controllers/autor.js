import {Autores} from '../models/autores.js'
export const obtenerAutores = (req, res)=>{res.send("obteniendo autores")}

export const obtenerAutor = (req,res)=>{}

export const agregarAutor = async (req,res)=>{
 const {nombre, apellido, descripcion} = req.body
 try {
    const NewAutor = await Autores.create({
        nombre: nombre,
        apellido: apellido,
        descripcion: descripcion
     })
     res.send("autor agregado")
     console.log(NewAutor);
 } catch (error) {
    console.log(error);
 }

}

export const actualizarAutor = (req,res)=>{}

export const eliminarAutor = (req,res)=>{}