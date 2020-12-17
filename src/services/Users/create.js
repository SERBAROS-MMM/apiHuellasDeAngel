import Role from '../../models/Role'
import User from './../../models/User'

export const addUser = async (newUserData) => {
    
        const newUser = new User({
                username: newUserData.username,
                email: newUserData.email,
                password: await User.encrypPassword(newUserData.password)
        })

        if(newUserData.roles){
                const foundRoles = await Role.find ({name:{$in: newUserData.roles }})
                newUser.roles = foundRoles.map(role =>role._id)
        }else{
                const roleDefault = await Role.findOne ({name: 'usuario'})
                newUser.roles = [roleDefault._id]
        }

        const userNew = await User.create(newUser)

        return userNew        
  
}