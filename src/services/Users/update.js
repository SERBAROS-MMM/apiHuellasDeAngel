import User from './../../models/User'

export const updateUserById = async (idUserData,newUserData) =>{
    const userUptatedById = await User.findByIdAndUpdate(idUserData,newUserData,{new :true})
    return userUptatedById
}