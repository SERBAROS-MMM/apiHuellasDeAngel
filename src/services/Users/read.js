import User from './../../models/User'

export const listUsers  = async () => {
    const listUsers = await User.find()
    return listUsers        
}

export const userById = async (idUserData) =>{
    const userById = await User.findById(idUserData)
    return userById
}