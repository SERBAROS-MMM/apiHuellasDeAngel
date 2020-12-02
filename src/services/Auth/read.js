import User from './../../models/User'
import jwt from 'jsonwebtoken'
import config from './../../config'

export const loginUser = async (UserData) =>{

    const userFound = await User.findOne({email:UserData.email}).populate("roles")

    if (!userFound) return {status:400, token:null, msg:'Usuario no existe.'}
    
    if(!await User.comparePassword (UserData.password,userFound.password)) return { status:401, token:null, msg:'Contraseña incorrecta.'}

    const token = jwt.sign({id:userFound._id},config.SECRET_JWT,{
        expiresIn:3600
    })

    return {status:200, token}
}