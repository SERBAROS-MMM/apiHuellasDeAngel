import User from './../../models/User'

export const addUser = async (newUserData) => {
    
        const newUser = new User({
                username: newUserData.username,
                email: newUserData.email,
                password: await User.encrypPassword(newUserData.password)
        })

        const userNew = await User.create(newUser)
        return userNew        
  
}