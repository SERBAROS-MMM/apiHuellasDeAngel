import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'

export const verifyToken = async (req,res,next) =>{
    try {
        const token = req.headers["x-access-token"]

        if(!token) return res.status(403).json({msg:'No token válido.'})

        const decoded = jwt.verify(token,config.SECRET_JWT)

        const user = await User.findById(decoded.id,{password:0})

        if(!user) return res.status(404).json({msg:'Usuario no encontrado'})

        req.userActive =user

        next()
        
    } catch (error) {
        return res.status(401).json({msg:'No autorizado'})
    }
    
}