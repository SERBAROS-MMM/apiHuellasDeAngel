import User from './../../models/User'

export const deleteUserById = async (idUserData) =>{
    const userDeletedById = await User.findByIdAndDelete(idUserData)
    return userDeletedById
}