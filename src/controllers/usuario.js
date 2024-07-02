import { Usuarios } from '../models/usuarios.js'

export const obtenerUsuarios = async (req, res)=>{
    try {
        const users = await Usuarios.findAll()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const obtenerUsuario = async (req,res)=>{
    const id = req.params.id
    try {
        const Usuario = await Usuarios.findByPk(id)
        if(Usuario){
        res.status(200).json(Usuario)
        }else{
            res.status(404).send("usuario no encontrado")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const agregarUsuario = async (req,res)=>{
    const {nombre, apellido, direccion, telefono, email} = req.body
    try {
        const NewUser = await Usuarios.create({
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            telefono: telefono,
            email: email
        })
        console.log(NewUser);
        res.status(200).send("usuario agregado correctamente")
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }

}

export const actualizarUsuario = async (req,res)=>{
    const id = req.params.id
    const {nombre, apellido, direccion, telefono, email} = req.body
    try {
        const User = await Usuarios.findByPk(id)
        if(User){
            User.nombre = nombre
            User.apellido = apellido
            User.direccion = direccion
            User.telefono = telefono
            User.email = email
            await User.save()
            res.status(200).send("usuario editado exitosamente")
        }else{
            res.status(404).send("usuario no encontrado")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const eliminarUsuario = async (req,res)=>{
    const id = req.params.id
    try {
        const DeleteUsuario = await Usuarios.destroy({where:{id_usuario:id}})
        if(DeleteUsuario){
            res.status(200).send("usuario eliminado exitosamente")
        }else{
            res.status(404).send("usuario no encontrado")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}